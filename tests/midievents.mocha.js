var assert=require('assert')
	, MIDIEvents = require('./../src/MIDIEvents.js');

// Tests
describe('Reading well formed MIDI events', function(){

	it("Should work", function() {
		var event, events=[], parser;
	  parser=new MIDIEvents.createParser(
		  new DataView(new Uint8Array([0, 255, 88, 4, 4, 2, 24, 8, 0, 255, 81, 3, 7,
		      161, 32, 0, 192, 5, 0, 193, 46, 0, 194, 70, 0, 146, 48, 96, 0, 60, 96,
		      96, 145, 67, 64, 96, 144, 76, 32, 129, 64, 130, 48, 64, 0, 60, 64, 0,
		      129, 67, 64, 0, 128, 76, 64, 0, 255, 47, 0]).buffer),
		    0, false);
	  event=parser.next();
	  do {
		  events.push(event);
		  event=parser.next();
	  } while(event);

		assert.equal(events.length,14);
		assert.equal(events[0].type,MIDIEvents.EVENT_META);
		assert.equal(events[0].subtype,MIDIEvents.EVENT_META_TIME_SIGNATURE);
		assert.equal(events[0].index,0);
		assert.equal(events[1].type,MIDIEvents.EVENT_META);
		assert.equal(events[1].subtype,MIDIEvents.EVENT_META_SET_TEMPO);
		assert.equal(events[1].index,8);
		assert.equal(events[2].type,MIDIEvents.EVENT_MIDI);
		assert.equal(events[2].subtype,MIDIEvents.EVENT_MIDI_PROGRAM_CHANGE);
		assert.equal(events[2].index,0xf);
		assert.equal(events[2].delta,0);
		assert.equal(events[2].channel,0);
		assert.equal(events[2].param1,0x5);
		assert.equal(events[3].type,MIDIEvents.EVENT_MIDI);
		assert.equal(events[3].subtype,MIDIEvents.EVENT_MIDI_PROGRAM_CHANGE);
		assert.equal(events[3].index,0x12);
		assert.equal(events[3].delta,0);
		assert.equal(events[3].channel,1);
		assert.equal(events[3].param1,46);
		assert.equal(events[4].type,MIDIEvents.EVENT_MIDI);
		assert.equal(events[4].subtype,MIDIEvents.EVENT_MIDI_PROGRAM_CHANGE);
		assert.equal(events[4].index,0x15);
		assert.equal(events[4].delta,0);
		assert.equal(events[4].channel,2);
		assert.equal(events[4].param1,0x46);
		assert.equal(events[5].type,MIDIEvents.EVENT_MIDI);
		assert.equal(events[5].subtype,MIDIEvents.EVENT_MIDI_NOTE_ON);
		assert.equal(events[5].index,0x18);
		assert.equal(events[5].delta,0);
		assert.equal(events[5].channel,2);
		assert.equal(events[5].param1,0x30);
		assert.equal(events[5].param2,0x60);
		assert.equal(events[6].type,MIDIEvents.EVENT_MIDI);
		assert.equal(events[6].subtype,MIDIEvents.EVENT_MIDI_NOTE_ON);
		assert.equal(events[6].index,0x1c);
		assert.equal(events[6].delta,0);
		assert.equal(events[6].channel,2);
		assert.equal(events[6].param1,0x3C);
		assert.equal(events[6].param2,0x60);
		assert.equal(events[7].type,MIDIEvents.EVENT_MIDI);
		assert.equal(events[7].subtype,MIDIEvents.EVENT_MIDI_NOTE_ON);
		assert.equal(events[7].index,0x1f);
		assert.equal(events[7].delta,0x60);
		assert.equal(events[7].channel,1);
		assert.equal(events[7].param1,0x43);
		assert.equal(events[7].param2,0x40);
		assert.equal(events[8].type,MIDIEvents.EVENT_MIDI);
		assert.equal(events[8].subtype,MIDIEvents.EVENT_MIDI_NOTE_ON);
		assert.equal(events[8].index,0x23);
		assert.equal(events[8].delta,0x60);
		assert.equal(events[8].channel,0);
		assert.equal(events[8].param1,0x4C);
		assert.equal(events[8].param2,0x20);
		assert.equal(events[9].type,MIDIEvents.EVENT_MIDI);
		assert.equal(events[9].subtype,MIDIEvents.EVENT_MIDI_NOTE_OFF);
		assert.equal(events[9].index,0x27);
		assert.equal(events[9].delta,192); // 2 bytes delta time
		assert.equal(events[9].channel,2);
		assert.equal(events[9].param1,0x30);
		assert.equal(events[9].param2,0x40);
		assert.equal(events[10].type,MIDIEvents.EVENT_MIDI);
		assert.equal(events[10].subtype,MIDIEvents.EVENT_MIDI_NOTE_OFF);
		assert.equal(events[10].index,0x2c);
		assert.equal(events[10].delta,0x00);
		assert.equal(events[10].channel,2);
		assert.equal(events[10].param1,0x3C);
		assert.equal(events[10].param2,0x40);
		assert.equal(events[11].type,MIDIEvents.EVENT_MIDI);
		assert.equal(events[11].subtype,MIDIEvents.EVENT_MIDI_NOTE_OFF);
		assert.equal(events[11].index,0x2f);
		assert.equal(events[11].delta,0x00);
		assert.equal(events[11].channel,1);
		assert.equal(events[11].param1,0x43);
		assert.equal(events[11].param2,0x40);
		assert.equal(events[12].type,MIDIEvents.EVENT_MIDI);
		assert.equal(events[12].subtype,MIDIEvents.EVENT_MIDI_NOTE_OFF);
		assert.equal(events[12].index,0x33);
		assert.equal(events[12].delta,0x00);
		assert.equal(events[12].channel,0);
		assert.equal(events[12].param1,0x4C);
		assert.equal(events[12].param2,0x40);
		assert.equal(events[13].type,MIDIEvents.EVENT_META);
		assert.equal(events[13].subtype,MIDIEvents.EVENT_META_END_OF_TRACK);
		assert.equal(events[13].index,0x37);
		assert.equal(events[13].delta,0x00);
	});

  // TO DO : report MIDIEvents specific MIDIFile tests here

});
