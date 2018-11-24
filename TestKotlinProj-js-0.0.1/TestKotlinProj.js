if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'TestKotlinProj'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'TestKotlinProj'.");
}
var TestKotlinProj = function (_, Kotlin) {
  'use strict';
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var toString = Kotlin.toString;
  Animal$Dog.prototype = Object.create(Animal.prototype);
  Animal$Dog.prototype.constructor = Animal$Dog;
  Animal$Mice.prototype = Object.create(Animal.prototype);
  Animal$Mice.prototype.constructor = Animal$Mice;
  Animal$Cat.prototype = Object.create(Animal.prototype);
  Animal$Cat.prototype.constructor = Animal$Cat;
  Animal$Cow.prototype = Object.create(Animal.prototype);
  Animal$Cow.prototype.constructor = Animal$Cow;
  function IDoSomeJoke() {
  }
  IDoSomeJoke.prototype.joke_61zpoe$ = function (name) {
    var tmp$;
    if (endsWith(name, 'ny'))
      tmp$ = name + '-pony';
    else if (endsWith(name, 'ax'))
      tmp$ = name + '-fax';
    else
      tmp$ = "I don't know good jokes, " + name;
    return tmp$;
  };
  IDoSomeJoke.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IDoSomeJoke',
    interfaces: []
  };
  function JokeProcessor() {
    JokeProcessor_instance = this;
  }
  JokeProcessor.prototype.tryToJoke_xrp3d4$ = function (name, joker) {
    if (name === void 0)
      name = null;
    if (joker === void 0)
      joker = null;
    if (name == null)
      return null;
    if (joker == null)
      return null;
    return joker.isBisy ? 'Sorry, Joker is busy' : joker.joke_61zpoe$(name);
  };
  JokeProcessor.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JokeProcessor',
    interfaces: []
  };
  var JokeProcessor_instance = null;
  function JokeProcessor_getInstance() {
    if (JokeProcessor_instance === null) {
      new JokeProcessor();
    }
    return JokeProcessor_instance;
  }
  function Animal() {
  }
  function Animal$Dog(bone) {
    if (bone === void 0)
      bone = false;
    Animal.call(this);
    this.bone_0 = bone;
  }
  Animal$Dog.prototype.sound = function () {
    return this.bone_0 === true ? 'woof!' : '...';
  };
  Animal$Dog.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dog',
    interfaces: [Animal]
  };
  function Animal$Mice() {
    Animal$Mice_instance = this;
    Animal.call(this);
  }
  Animal$Mice.prototype.sound = function () {
    return 'pee';
  };
  Animal$Mice.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Mice',
    interfaces: [Animal]
  };
  var Animal$Mice_instance = null;
  function Animal$Mice_getInstance() {
    if (Animal$Mice_instance === null) {
      new Animal$Mice();
    }
    return Animal$Mice_instance;
  }
  function Animal$Cat(mice) {
    if (mice === void 0)
      mice = null;
    Animal.call(this);
    this.mice_0 = mice;
  }
  Animal$Cat.prototype.sound = function () {
    var tmp$;
    return (tmp$ = this.mice_0 != null ? 'meow' : null) != null ? tmp$ : '...';
  };
  Animal$Cat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cat',
    interfaces: [Animal]
  };
  function Animal$Cow(grass) {
    if (grass === void 0)
      grass = false;
    Animal.call(this);
    this.grass_0 = grass;
  }
  Animal$Cow.prototype.sound = function () {
    return this.grass_0 === true ? 'Moow' : '...';
  };
  Animal$Cow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cow',
    interfaces: [Animal]
  };
  Animal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Animal',
    interfaces: []
  };
  function simpleCabackUser(name, onSuccess) {
    onSuccess('Hello, ' + name + '!');
  }
  function testWeatherPage$lambda(result, error) {
    var tmp$;
    println((tmp$ = result != null ? result : error) != null ? tmp$ : 'Oops...');
    return Unit;
  }
  function testWeatherPage(getMethod) {
    var path = 'https://samples.openweathermap.org/data/2.5/weather';
    var args = mapOf(to('id', '1'));
    getMethod(path, args, testWeatherPage$lambda);
  }
  function hello() {
    return 'Hello from JS';
  }
  function SimpleKotlin(a, b, description) {
    if (a === void 0)
      a = 0;
    if (b === void 0)
      b = 0;
    if (description === void 0)
      description = null;
    this.a = a;
    this.b = b;
    this.description = description;
  }
  SimpleKotlin.prototype.desc = function () {
    return this.a.toString() + ':' + this.b + '; description=' + toString(this.description);
  };
  SimpleKotlin.prototype.summarize_vfu3av$ = function (other) {
    return new SimpleKotlin(this.a + other.a | 0, this.b + other.b | 0, toString(this.description) + ' ' + toString(other.description));
  };
  SimpleKotlin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleKotlin',
    interfaces: []
  };
  function SimpleKotlinForJava(a, b, description) {
    if (a === void 0)
      a = null;
    if (b === void 0)
      b = null;
    if (description === void 0)
      description = null;
    this.a = a != null ? a : 0;
    this.b = b != null ? b : 0;
    this.description = description != null ? description : '';
  }
  SimpleKotlinForJava.prototype.desc = function () {
    return this.a.toString() + ':' + this.b + '; description=' + this.description;
  };
  SimpleKotlinForJava.prototype.summarize_vfu3av$ = function (other) {
    return new SimpleKotlin(this.a + other.a | 0, this.b + other.b | 0, this.description + ' ' + toString(other.description));
  };
  SimpleKotlinForJava.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleKotlinForJava',
    interfaces: []
  };
  function Sample() {
  }
  Sample.prototype.checkMe = function () {
    return 12;
  };
  Sample.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sample',
    interfaces: []
  };
  function Platform() {
    Platform_instance = this;
    this.name = 'JS';
  }
  Platform.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Platform',
    interfaces: []
  };
  var Platform_instance = null;
  function Platform_getInstance() {
    if (Platform_instance === null) {
      new Platform();
    }
    return Platform_instance;
  }
  var package$sample = _.sample || (_.sample = {});
  var package$medium = package$sample.medium || (package$sample.medium = {});
  package$medium.IDoSomeJoke = IDoSomeJoke;
  Object.defineProperty(package$medium, 'JokeProcessor', {
    get: JokeProcessor_getInstance
  });
  Animal.Dog = Animal$Dog;
  Object.defineProperty(Animal, 'Mice', {
    get: Animal$Mice_getInstance
  });
  Animal.Cat = Animal$Cat;
  Animal.Cow = Animal$Cow;
  var package$pro = package$sample.pro || (package$sample.pro = {});
  package$pro.Animal = Animal;
  package$pro.simpleCabackUser_hyc7mn$ = simpleCabackUser;
  package$pro.testWeatherPage_6ijtou$ = testWeatherPage;
  package$sample.hello = hello;
  package$sample.SimpleKotlin = SimpleKotlin;
  package$sample.SimpleKotlinForJava = SimpleKotlinForJava;
  package$sample.Sample = Sample;
  Object.defineProperty(package$sample, 'Platform', {
    get: Platform_getInstance
  });
  Kotlin.defineModule('TestKotlinProj', _);
  return _;
}(typeof TestKotlinProj === 'undefined' ? {} : TestKotlinProj, kotlin);
