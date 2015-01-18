# MIDIEvents
> MIDIEvents is a module intended to help working with MIDI events. MIDIEvents is
 the base project for MIDIFile and MIDIPlayer.

[![NPM version](https://badge.fury.io/js/midievents.png)](https://npmjs.org/package/midievents) [![Build status](https://secure.travis-ci.org/nfroidure/MIDIEvents.png)](https://travis-ci.org/nfroidure/MIDIEvents) [![Dependency Status](https://david-dm.org/nfroidure/midievents.png)](https://david-dm.org/nfroidure/midievents) [![devDependency Status](https://david-dm.org/nfroidure/midievents/dev-status.png)](https://david-dm.org/nfroidure/midievents#info=devDependencies) [![Coverage Status](https://coveralls.io/repos/nfroidure/MIDIEvents/badge.png?branch=master)](https://coveralls.io/r/nfroidure/MIDIEvents?branch=master)

MIDIEvents can be used either in modern browsers
 ([pick the last bundle](https://github.com/nfroidure/MIDIEvents/blob/master/dist/MIDIEvents.js))
 or with NodeJS by installing the following
 [NPM module](https://npmjs.org/package/midievents) :
```bash
npm install midievents
```

## Browser support
[![Build Status](https://ci.testling.com/nfroidure/MIDIEvents.png)](https://ci.testling.com/nfroidure/MIDIEvents)

## What it does
* Decode midi events
* Check midi events (using strictMode)
*	Calculate needed buffer to encode midi events
*	Encode midi events

## What it doesn't do
*	Reading MIDI files. It's the role of the
 [MIDIFile project](https://github.com/nfroidure/MIDIFile).
* Playing MIDI files. It's the role of the
 [MIDIPlayer project](https://github.com/nfroidure/MIDIPlayer).

## Usage
```js
// Your variable with an ArrayBuffer instance containing your MIDI events
var anyBuffer;

// MIDI events parser
var event, events=[], parser;
parser=new MIDIEvents.createParser(
  new DataView(anyBuffer),
    0, false);
event=parser.next();
do {
  events.push(event);
  event=parser.next();
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

## License
Copyright Nicolas Froidure 2013. MIT licence.
