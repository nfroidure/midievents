# MIDIEvents
> MIDIEvents is a module intended to help working with MIDI events.

MIDIEvents is the base project for [MIDIFile](https://github.com/nfroidure/MIDIFile)
 and [MIDIPlayer](https://github.com/nfroidure/MIDIPlayer). You can also check
 this [Karaoke Player](http://karaoke.insertafter.com) built on top of those
 libraries.

[![NPM version](https://badge.fury.io/js/midievents.svg)](https://npmjs.org/package/midievents)
 [![Build status](https://secure.travis-ci.org/nfroidure/MIDIEvents.svg)](https://travis-ci.org/nfroidure/MIDIEvents)
 [![Dependency Status](https://david-dm.org/nfroidure/midievents.svg)](https://david-dm.org/nfroidure/midievents)
 [![devDependency Status](https://david-dm.org/nfroidure/midievents/dev-status.svg)](https://david-dm.org/nfroidure/midievents#info=devDependencies)
 [![Coverage Status](https://coveralls.io/repos/nfroidure/MIDIEvents/badge.svg?branch=master)](https://coveralls.io/r/nfroidure/MIDIEvents?branch=master)

MIDIEvents can be used either in modern browsers
 ([pick the last bundle](https://github.com/nfroidure/MIDIEvents/blob/master/dist/MIDIEvents.js))
 or with NodeJS by installing the following
 [NPM module](https://npmjs.org/package/midievents) :
```bash
npm install midievents
```

## Browser support
[![Build Status](https://ci.testling.com/nfroidure/midievents.svg)](https://ci.testling.com/nfroidure/MIDIEvents)

## What it does
* Decode MIDI events
* Check MIDI events (using strictMode)
*	Calculate needed buffer to encode MIDI events
*	Encode MIDI events

## What it doesn't do
*	Reading MIDI files. It's the role of the
 [MIDIFile project](https://github.com/nfroidure/MIDIFile).
* Playing MIDI files. It's the role of the
 [MIDIPlayer project](https://github.com/nfroidure/MIDIPlayer).

## Usage
```js
// Your variable with an ArrayBuffer instance containing your MIDI events
var anyBuffer;

// Parse MIDI events
var events = [];
var parser = new MIDIEvents.createParser(new DataView(anyBuffer), 0, false);
var event = parser.next();

do {
  events.push(event);
  event = parser.next();
} while(event);

// Check bufffer size before encoding
if(anyBuffer.length >= MIDIEvents.getRequiredBufferLength(events)) {
  console.log('ok');
}

// Encode MIDI events
var destination = new Uint8Array(anyBuffer);
MIDIEvents.writeToTrack(events, destination);

```

## Contributing / Testing
Install them and run the following command :

```bash
npm install --dev
su npm install grunt-cli -g
grunt test
```

## Contributing
* Feel free to PR
* If you find MIDI events the library can't read, create a test an do a pull
 request. I'll work on it asap.
* Run `npm run` to get a list of useful development commands.

## License
Copyright Nicolas Froidure. MIT licence.
