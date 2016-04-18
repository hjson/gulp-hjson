var Hjson=require('hjson');
var stream=require('stream');
var path=require('path');
var es=require('event-stream');
var through=require('through');

module.exports=function(options)
{
  options=options||{};

  function convert(file, text, options)
  {
    var data=Hjson.parse(text);
    var name=file.path.substr(0, file.path.length-path.extname(file.path).length);
    switch (options.to)
    {
      case 'json':
        file.path=name+".json";
        return JSON.stringify(data, null, options.jsonSpace);
      case 'hjson':
        file.path=name+".hjson";
        return Hjson.stringify(data);
      default: throw new Error('Please specify gulp-hjson options { to: "json"|"hjson" }!');
    }
  }

  function processStream(file, options)
  {
    var text='';
    function write(buf) { text+=buf.toString(options.encoding); }
    function end() { this.queue(convert(file, text, options)); }
    return through(write, end);
  }

  function process(file, cb)
  {
    var isStream=file.contents && typeof file.contents.on === 'function' && typeof file.contents.pipe === 'function';
    var isBuffer=file.contents instanceof Buffer;

    if (isStream)
    {
      file.contents=file.contents.pipe(processStream(file, options));
      return cb(null, file);
    }
    else if (isBuffer)
    {
      var text=String(file.contents);
      file.contents=new Buffer(convert(file, text, options));
      return cb(null, file);
    }
    else cb(null, file);
  }

  return es.map(process);
};
