/************** 
 * 2-Tit Test *
 **************/

import { PsychoJS } from './lib/core-2020.2.js';
import * as core from './lib/core-2020.2.js';
import { TrialHandler } from './lib/data-2020.2.js';
import { Scheduler } from './lib/util-2020.2.js';
import * as visual from './lib/visual-2020.2.js';
import * as sound from './lib/sound-2020.2.js';
import * as util from './lib/util-2020.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('white'),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = '2-TIT';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(BienvenueRoutineBegin());
flowScheduler.add(BienvenueRoutineEachFrame());
flowScheduler.add(BienvenueRoutineEnd());
flowScheduler.add(Tache_1_instructionsRoutineBegin());
flowScheduler.add(Tache_1_instructionsRoutineEachFrame());
flowScheduler.add(Tache_1_instructionsRoutineEnd());
const derLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(derLoopBegin, derLoopScheduler);
flowScheduler.add(derLoopScheduler);
flowScheduler.add(derLoopEnd);
flowScheduler.add(Fin_session_1RoutineBegin());
flowScheduler.add(Fin_session_1RoutineEachFrame());
flowScheduler.add(Fin_session_1RoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.10';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var BienvenueClock;
var texte_bienvenue;
var skip_bienvenue;
var Tache_1_instructionsClock;
var instruction_stimuli;
var skip_presentation;
var fixation_crossClock;
var cross;
var test_infClock;
var inference;
var image;
var keyInf;
var Fin_session_1Clock;
var text_5;
var key_resp_4;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Bienvenue"
  BienvenueClock = new util.Clock();
  texte_bienvenue = new visual.TextStim({
    win: psychoJS.window,
    name: 'texte_bienvenue',
    text: 'Welcome to the second session of the experiment.\n\nReminder: You can withdraw from the study at any moment and without giving any justification by pressing the [Esc] key.\n\n[Press spacebar to continue]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  skip_bienvenue = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Tache_1_instructions"
  Tache_1_instructionsClock = new util.Clock();
  instruction_stimuli = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_stimuli',
    text: 'This session will be shorter than the one you did last night.\n\nYou will be presented with a pair of items.\nAll you have to do is press [up] or [down] arrow to guess which one is covering the smiley.\n\n[Press spacebar to continue]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  skip_presentation = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation_cross"
  fixation_crossClock = new util.Clock();
  cross = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color('lightblue'),
    fillColor: new util.Color('lightblue'),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "test_inf"
  test_infClock = new util.Clock();
  inference = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inference', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.4, 0.8],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.3), 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  keyInf = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Fin_session_1"
  Fin_session_1Clock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'This is the end of the second session.\n\nWe will contact you in a few days about the third session.\n\nFeel free to contact the researchers if you have any queries/concerns.\n\n(Press [spacebar] to finish)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _skip_bienvenue_allKeys;
var BienvenueComponents;
function BienvenueRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Bienvenue'-------
    t = 0;
    BienvenueClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    skip_bienvenue.keys = undefined;
    skip_bienvenue.rt = undefined;
    _skip_bienvenue_allKeys = [];
    // keep track of which components have finished
    BienvenueComponents = [];
    BienvenueComponents.push(texte_bienvenue);
    BienvenueComponents.push(skip_bienvenue);
    
    for (const thisComponent of BienvenueComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BienvenueRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Bienvenue'-------
    // get current time
    t = BienvenueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *texte_bienvenue* updates
    if (t >= 0.0 && texte_bienvenue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      texte_bienvenue.tStart = t;  // (not accounting for frame time here)
      texte_bienvenue.frameNStart = frameN;  // exact frame index
      
      texte_bienvenue.setAutoDraw(true);
    }

    
    // *skip_bienvenue* updates
    if (t >= 0.0 && skip_bienvenue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skip_bienvenue.tStart = t;  // (not accounting for frame time here)
      skip_bienvenue.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { skip_bienvenue.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { skip_bienvenue.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { skip_bienvenue.clearEvents(); });
    }

    if (skip_bienvenue.status === PsychoJS.Status.STARTED) {
      let theseKeys = skip_bienvenue.getKeys({keyList: ['space'], waitRelease: false});
      _skip_bienvenue_allKeys = _skip_bienvenue_allKeys.concat(theseKeys);
      if (_skip_bienvenue_allKeys.length > 0) {
        skip_bienvenue.keys = _skip_bienvenue_allKeys[_skip_bienvenue_allKeys.length - 1].name;  // just the last key pressed
        skip_bienvenue.rt = _skip_bienvenue_allKeys[_skip_bienvenue_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BienvenueComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BienvenueRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Bienvenue'-------
    for (const thisComponent of BienvenueComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('skip_bienvenue.keys', skip_bienvenue.keys);
    if (typeof skip_bienvenue.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('skip_bienvenue.rt', skip_bienvenue.rt);
        routineTimer.reset();
        }
    
    skip_bienvenue.stop();
    // the Routine "Bienvenue" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _skip_presentation_allKeys;
var Tache_1_instructionsComponents;
function Tache_1_instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Tache_1_instructions'-------
    t = 0;
    Tache_1_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    skip_presentation.keys = undefined;
    skip_presentation.rt = undefined;
    _skip_presentation_allKeys = [];
    // keep track of which components have finished
    Tache_1_instructionsComponents = [];
    Tache_1_instructionsComponents.push(instruction_stimuli);
    Tache_1_instructionsComponents.push(skip_presentation);
    
    for (const thisComponent of Tache_1_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Tache_1_instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Tache_1_instructions'-------
    // get current time
    t = Tache_1_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_stimuli* updates
    if (t >= 0.0 && instruction_stimuli.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_stimuli.tStart = t;  // (not accounting for frame time here)
      instruction_stimuli.frameNStart = frameN;  // exact frame index
      
      instruction_stimuli.setAutoDraw(true);
    }

    
    // *skip_presentation* updates
    if (t >= 0.0 && skip_presentation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skip_presentation.tStart = t;  // (not accounting for frame time here)
      skip_presentation.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { skip_presentation.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { skip_presentation.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { skip_presentation.clearEvents(); });
    }

    if (skip_presentation.status === PsychoJS.Status.STARTED) {
      let theseKeys = skip_presentation.getKeys({keyList: ['space'], waitRelease: false});
      _skip_presentation_allKeys = _skip_presentation_allKeys.concat(theseKeys);
      if (_skip_presentation_allKeys.length > 0) {
        skip_presentation.keys = _skip_presentation_allKeys[_skip_presentation_allKeys.length - 1].name;  // just the last key pressed
        skip_presentation.rt = _skip_presentation_allKeys[_skip_presentation_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Tache_1_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Tache_1_instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Tache_1_instructions'-------
    for (const thisComponent of Tache_1_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('skip_presentation.keys', skip_presentation.keys);
    if (typeof skip_presentation.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('skip_presentation.rt', skip_presentation.rt);
        routineTimer.reset();
        }
    
    skip_presentation.stop();
    // the Routine "Tache_1_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var der;
var currentLoop;
function derLoopBegin(derLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  der = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, '3-Variables.xlsx', '0:90'),
    seed: undefined, name: 'der'
  });
  psychoJS.experiment.addLoop(der); // add the loop to the experiment
  currentLoop = der;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisDer of der) {
    const snapshot = der.getSnapshot();
    derLoopScheduler.add(importConditions(snapshot));
    derLoopScheduler.add(fixation_crossRoutineBegin(snapshot));
    derLoopScheduler.add(fixation_crossRoutineEachFrame(snapshot));
    derLoopScheduler.add(fixation_crossRoutineEnd(snapshot));
    derLoopScheduler.add(test_infRoutineBegin(snapshot));
    derLoopScheduler.add(test_infRoutineEachFrame(snapshot));
    derLoopScheduler.add(test_infRoutineEnd(snapshot));
    derLoopScheduler.add(endLoopIteration(derLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function derLoopEnd() {
  psychoJS.experiment.removeLoop(der);

  return Scheduler.Event.NEXT;
}


var fixation_crossComponents;
function fixation_crossRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fixation_cross'-------
    t = 0;
    fixation_crossClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixation_crossComponents = [];
    fixation_crossComponents.push(cross);
    
    for (const thisComponent of fixation_crossComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixation_crossRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fixation_cross'-------
    // get current time
    t = fixation_crossClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cross* updates
    if (t >= 0.0 && cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross.tStart = t;  // (not accounting for frame time here)
      cross.frameNStart = frameN;  // exact frame index
      
      cross.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((cross.status === PsychoJS.Status.STARTED || cross.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      cross.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixation_crossComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixation_crossRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fixation_cross'-------
    for (const thisComponent of fixation_crossComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _keyInf_allKeys;
var test_infComponents;
function test_infRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'test_inf'-------
    t = 0;
    test_infClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    inference.setImage(inference_pairs);
    image.setImage(lastSmiley);
    keyInf.keys = undefined;
    keyInf.rt = undefined;
    _keyInf_allKeys = [];
    // keep track of which components have finished
    test_infComponents = [];
    test_infComponents.push(inference);
    test_infComponents.push(image);
    test_infComponents.push(keyInf);
    
    for (const thisComponent of test_infComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test_infRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'test_inf'-------
    // get current time
    t = test_infClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inference* updates
    if (t >= 0.0 && inference.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inference.tStart = t;  // (not accounting for frame time here)
      inference.frameNStart = frameN;  // exact frame index
      
      inference.setAutoDraw(true);
    }

    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    
    // *keyInf* updates
    if (t >= 0.0 && keyInf.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyInf.tStart = t;  // (not accounting for frame time here)
      keyInf.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyInf.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyInf.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyInf.clearEvents(); });
    }

    if (keyInf.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyInf.getKeys({keyList: ['up', 'down'], waitRelease: false});
      _keyInf_allKeys = _keyInf_allKeys.concat(theseKeys);
      if (_keyInf_allKeys.length > 0) {
        keyInf.keys = _keyInf_allKeys[_keyInf_allKeys.length - 1].name;  // just the last key pressed
        keyInf.rt = _keyInf_allKeys[_keyInf_allKeys.length - 1].rt;
        // was this correct?
        if (keyInf.keys == answer_5) {
            keyInf.corr = 1;
        } else {
            keyInf.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of test_infComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test_infRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'test_inf'-------
    for (const thisComponent of test_infComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (keyInf.keys === undefined) {
      if (['None','none',undefined].includes(answer_5)) {
         keyInf.corr = 1;  // correct non-response
      } else {
         keyInf.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('keyInf.keys', keyInf.keys);
    psychoJS.experiment.addData('keyInf.corr', keyInf.corr);
    if (typeof keyInf.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyInf.rt', keyInf.rt);
        routineTimer.reset();
        }
    
    keyInf.stop();
    // the Routine "test_inf" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var Fin_session_1Components;
function Fin_session_1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Fin_session_1'-------
    t = 0;
    Fin_session_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    Fin_session_1Components = [];
    Fin_session_1Components.push(text_5);
    Fin_session_1Components.push(key_resp_4);
    
    for (const thisComponent of Fin_session_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Fin_session_1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Fin_session_1'-------
    // get current time
    t = Fin_session_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Fin_session_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Fin_session_1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Fin_session_1'-------
    for (const thisComponent of Fin_session_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "Fin_session_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
