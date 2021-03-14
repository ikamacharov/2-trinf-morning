/************** 
 * 1-Tit Test *
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
let expName = '1-TIT';  // from the Builder filename that created this script
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
flowScheduler.add(IntroductionRoutineBegin());
flowScheduler.add(IntroductionRoutineEachFrame());
flowScheduler.add(IntroductionRoutineEnd());
flowScheduler.add(Task_1_InstructionsRoutineBegin());
flowScheduler.add(Task_1_InstructionsRoutineEachFrame());
flowScheduler.add(Task_1_InstructionsRoutineEnd());
const loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loopLoopBegin, loopLoopScheduler);
flowScheduler.add(loopLoopScheduler);
flowScheduler.add(loopLoopEnd);
flowScheduler.add(next_stepRoutineBegin());
flowScheduler.add(next_stepRoutineEachFrame());
flowScheduler.add(next_stepRoutineEnd());
flowScheduler.add(Task_2_instructionsRoutineBegin());
flowScheduler.add(Task_2_instructionsRoutineEachFrame());
flowScheduler.add(Task_2_instructionsRoutineEnd());
const boucle_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(boucle_2LoopBegin, boucle_2LoopScheduler);
flowScheduler.add(boucle_2LoopScheduler);
flowScheduler.add(boucle_2LoopEnd);
flowScheduler.add(next_stepRoutineBegin());
flowScheduler.add(next_stepRoutineEachFrame());
flowScheduler.add(next_stepRoutineEnd());
flowScheduler.add(Task_4_InstructionsRoutineBegin());
flowScheduler.add(Task_4_InstructionsRoutineEachFrame());
flowScheduler.add(Task_4_InstructionsRoutineEnd());
const boucle_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(boucle_4LoopBegin, boucle_4LoopScheduler);
flowScheduler.add(boucle_4LoopScheduler);
flowScheduler.add(boucle_4LoopEnd);
flowScheduler.add(next_stepRoutineBegin());
flowScheduler.add(next_stepRoutineEachFrame());
flowScheduler.add(next_stepRoutineEnd());
flowScheduler.add(Tache_5_instructionsRoutineBegin());
flowScheduler.add(Tache_5_instructionsRoutineEachFrame());
flowScheduler.add(Tache_5_instructionsRoutineEnd());
const boucle_5LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(boucle_5LoopBegin, boucle_5LoopScheduler);
flowScheduler.add(boucle_5LoopScheduler);
flowScheduler.add(boucle_5LoopEnd);
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


var IntroductionClock;
var texte_bienvenue;
var skip_bienvenue;
var Task_1_InstructionsClock;
var instruction_stimuli;
var skip_presentation;
var fixation_crossClock;
var cross;
var items_presentationClock;
var stimuli;
var next_stepClock;
var transition;
var Task_2_instructionsClock;
var instruction_reco;
var skip_reco;
var test_recoClock;
var reco;
var key_resp;
var accuracy_and_feedback_1Clock;
var acc;
var trial;
var a;
var message_1;
var message_2;
var text_2;
var text_3;
var Task_4_InstructionsClock;
var instruction_premice;
var skip_premice;
var test_premiceClock;
var premice;
var tete;
var key_resp_3;
var Taux_réussite_et_feedback_3Clock;
var accuracy;
var trialNumber;
var c;
var message_98;
var message_99;
var text_6;
var text_7;
var Tache_5_instructionsClock;
var instr_premice;
var skip_last_task;
var test_last_premClock;
var prem;
var key_resp_5;
var taux_réussite_et_feedback_4Clock;
var accuracys1;
var trialNumbers1;
var cs1;
var Fin_session_1Clock;
var text_5;
var key_resp_4;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Introduction"
  IntroductionClock = new util.Clock();
  texte_bienvenue = new visual.TextStim({
    win: psychoJS.window,
    name: 'texte_bienvenue',
    text: 'Welcome to the first session in the experiment!\n\nThis experiment is made up of 4 sessions (2 in the evening, and 2 in the following mornings).\n\nRemember you can always withdraw from the experiment at any time without giving any reason. To do so, press the [Esc] key. You will only receive the credits you’ve accrued.\n\n[Press spacebar to continue]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  skip_bienvenue = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Task_1_Instructions"
  Task_1_InstructionsClock = new util.Clock();
  instruction_stimuli = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_stimuli',
    text: 'Now, a series of pictures will be displayed. \n\nAll you have to do is remember the objects being presented.\n\n[Press spacebar to continue]',
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
  
  // Initialize components for Routine "items_presentation"
  items_presentationClock = new util.Clock();
  stimuli = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimuli', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.4, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "next_step"
  next_stepClock = new util.Clock();
  transition = new visual.TextStim({
    win: psychoJS.window,
    name: 'transition',
    text: 'Get ready for the next step!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Task_2_instructions"
  Task_2_instructionsClock = new util.Clock();
  instruction_reco = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_reco',
    text: 'This part is a rocognition task. \n\nThe items you saw in the last part will be presented with a distractor. Press [up] or [down] on your keyboard to select the item you think was shown previously.\n\nYou will receive feedback after each trial. \n\n[Press spacebar to continue]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  skip_reco = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
  
  // Initialize components for Routine "test_reco"
  test_recoClock = new util.Clock();
  reco = new visual.ImageStim({
    win : psychoJS.window,
    name : 'reco', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.4, 0.8],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "accuracy_and_feedback_1"
  accuracy_and_feedback_1Clock = new util.Clock();
  acc = 0;
  trial = 0;
  key_resp.corr = 0;
  a = 0;
  message_1 = "";
  message_2 = "";
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('blue'),  opacity: 1,
    depth: -1.0 
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "next_step"
  next_stepClock = new util.Clock();
  transition = new visual.TextStim({
    win: psychoJS.window,
    name: 'transition',
    text: 'Get ready for the next step!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Task_4_Instructions"
  Task_4_InstructionsClock = new util.Clock();
  instruction_premice = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_premice',
    text: 'In this task, you will see two of the items at a time. \n\nYour job is to decide which one of the two items is covering a smiley face.\n\nIf you think the top or bottom item is covering the smiley face, press the [up] or [down] button respectively.\n\nYou will receive feedback, so try to remember which item is covering the smiley in each pair.\n\nAt first, the task will seem very difficult, but over trials it will become easier.\n\n[Press spacebar to continue]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  skip_premice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
  
  // Initialize components for Routine "test_premice"
  test_premiceClock = new util.Clock();
  premice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'premice', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.4, 0.8],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  tete = new visual.ImageStim({
    win : psychoJS.window,
    name : 'tete', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.3), 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Taux_réussite_et_feedback_3"
  Taux_réussite_et_feedback_3Clock = new util.Clock();
  accuracy = 0;
  trialNumber = 0;
  key_resp_3.corr = 0;
  c = 0;
  message_98 = "";
  message_99 = "";
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('blue'),  opacity: 1,
    depth: -1.0 
  });
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "next_step"
  next_stepClock = new util.Clock();
  transition = new visual.TextStim({
    win: psychoJS.window,
    name: 'transition',
    text: 'Get ready for the next step!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Tache_5_instructions"
  Tache_5_instructionsClock = new util.Clock();
  instr_premice = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_premice',
    text: 'This is the final part of session 1. \n\nThis part is identical to the previous one. You have to correctly indicate which item is hiding a smiley face behind it. This time, however, you will receive no feedback.\n\n[Press spacebar to continue]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  skip_last_task = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
  
  // Initialize components for Routine "test_last_prem"
  test_last_premClock = new util.Clock();
  prem = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prem', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.4, 0.8],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "taux_réussite_et_feedback_4"
  taux_réussite_et_feedback_4Clock = new util.Clock();
  accuracys1 = 0;
  trialNumbers1 = 0;
  key_resp_5.corrs1 = 0;
  cs1 = 0;
  
  // Initialize components for Routine "Fin_session_1"
  Fin_session_1Clock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'This is the end of session 1!\n\nSee you tomorrow for session 2, which will take less time than this one. \n\nRest well, and don’t forget to put your eyemask on. :)\n\n(Press [spacebar] to finish)',
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
var IntroductionComponents;
function IntroductionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Introduction'-------
    t = 0;
    IntroductionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    skip_bienvenue.keys = undefined;
    skip_bienvenue.rt = undefined;
    _skip_bienvenue_allKeys = [];
    // keep track of which components have finished
    IntroductionComponents = [];
    IntroductionComponents.push(texte_bienvenue);
    IntroductionComponents.push(skip_bienvenue);
    
    for (const thisComponent of IntroductionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function IntroductionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Introduction'-------
    // get current time
    t = IntroductionClock.getTime();
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
    for (const thisComponent of IntroductionComponents)
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


function IntroductionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Introduction'-------
    for (const thisComponent of IntroductionComponents) {
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
    // the Routine "Introduction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _skip_presentation_allKeys;
var Task_1_InstructionsComponents;
function Task_1_InstructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Task_1_Instructions'-------
    t = 0;
    Task_1_InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    skip_presentation.keys = undefined;
    skip_presentation.rt = undefined;
    _skip_presentation_allKeys = [];
    // keep track of which components have finished
    Task_1_InstructionsComponents = [];
    Task_1_InstructionsComponents.push(instruction_stimuli);
    Task_1_InstructionsComponents.push(skip_presentation);
    
    for (const thisComponent of Task_1_InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Task_1_InstructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Task_1_Instructions'-------
    // get current time
    t = Task_1_InstructionsClock.getTime();
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
    for (const thisComponent of Task_1_InstructionsComponents)
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


function Task_1_InstructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Task_1_Instructions'-------
    for (const thisComponent of Task_1_InstructionsComponents) {
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
    // the Routine "Task_1_Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var loop;
var currentLoop;
function loopLoopBegin(loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, '3-Variables.xlsx', '0:6'),
    seed: undefined, name: 'loop'
  });
  psychoJS.experiment.addLoop(loop); // add the loop to the experiment
  currentLoop = loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisLoop of loop) {
    const snapshot = loop.getSnapshot();
    loopLoopScheduler.add(importConditions(snapshot));
    loopLoopScheduler.add(fixation_crossRoutineBegin(snapshot));
    loopLoopScheduler.add(fixation_crossRoutineEachFrame(snapshot));
    loopLoopScheduler.add(fixation_crossRoutineEnd(snapshot));
    loopLoopScheduler.add(items_presentationRoutineBegin(snapshot));
    loopLoopScheduler.add(items_presentationRoutineEachFrame(snapshot));
    loopLoopScheduler.add(items_presentationRoutineEnd(snapshot));
    loopLoopScheduler.add(endLoopIteration(loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function loopLoopEnd() {
  psychoJS.experiment.removeLoop(loop);

  return Scheduler.Event.NEXT;
}


var boucle_2;
function boucle_2LoopBegin(boucle_2LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  boucle_2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, '3-Variables.xlsx', '0:60'),
    seed: undefined, name: 'boucle_2'
  });
  psychoJS.experiment.addLoop(boucle_2); // add the loop to the experiment
  currentLoop = boucle_2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBoucle_2 of boucle_2) {
    const snapshot = boucle_2.getSnapshot();
    boucle_2LoopScheduler.add(importConditions(snapshot));
    boucle_2LoopScheduler.add(fixation_crossRoutineBegin(snapshot));
    boucle_2LoopScheduler.add(fixation_crossRoutineEachFrame(snapshot));
    boucle_2LoopScheduler.add(fixation_crossRoutineEnd(snapshot));
    boucle_2LoopScheduler.add(test_recoRoutineBegin(snapshot));
    boucle_2LoopScheduler.add(test_recoRoutineEachFrame(snapshot));
    boucle_2LoopScheduler.add(test_recoRoutineEnd(snapshot));
    boucle_2LoopScheduler.add(accuracy_and_feedback_1RoutineBegin(snapshot));
    boucle_2LoopScheduler.add(accuracy_and_feedback_1RoutineEachFrame(snapshot));
    boucle_2LoopScheduler.add(accuracy_and_feedback_1RoutineEnd(snapshot));
    boucle_2LoopScheduler.add(endLoopIteration(boucle_2LoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function boucle_2LoopEnd() {
  psychoJS.experiment.removeLoop(boucle_2);

  return Scheduler.Event.NEXT;
}


var boucle_4;
function boucle_4LoopBegin(boucle_4LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  boucle_4 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, '3-Variables.xlsx', '0:100'),
    seed: undefined, name: 'boucle_4'
  });
  psychoJS.experiment.addLoop(boucle_4); // add the loop to the experiment
  currentLoop = boucle_4;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBoucle_4 of boucle_4) {
    const snapshot = boucle_4.getSnapshot();
    boucle_4LoopScheduler.add(importConditions(snapshot));
    boucle_4LoopScheduler.add(fixation_crossRoutineBegin(snapshot));
    boucle_4LoopScheduler.add(fixation_crossRoutineEachFrame(snapshot));
    boucle_4LoopScheduler.add(fixation_crossRoutineEnd(snapshot));
    boucle_4LoopScheduler.add(test_premiceRoutineBegin(snapshot));
    boucle_4LoopScheduler.add(test_premiceRoutineEachFrame(snapshot));
    boucle_4LoopScheduler.add(test_premiceRoutineEnd(snapshot));
    boucle_4LoopScheduler.add(Taux_réussite_et_feedback_3RoutineBegin(snapshot));
    boucle_4LoopScheduler.add(Taux_réussite_et_feedback_3RoutineEachFrame(snapshot));
    boucle_4LoopScheduler.add(Taux_réussite_et_feedback_3RoutineEnd(snapshot));
    boucle_4LoopScheduler.add(endLoopIteration(boucle_4LoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function boucle_4LoopEnd() {
  psychoJS.experiment.removeLoop(boucle_4);

  return Scheduler.Event.NEXT;
}


var boucle_5;
function boucle_5LoopBegin(boucle_5LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  boucle_5 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, '3-Variables.xlsx', '0:100'),
    seed: undefined, name: 'boucle_5'
  });
  psychoJS.experiment.addLoop(boucle_5); // add the loop to the experiment
  currentLoop = boucle_5;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBoucle_5 of boucle_5) {
    const snapshot = boucle_5.getSnapshot();
    boucle_5LoopScheduler.add(importConditions(snapshot));
    boucle_5LoopScheduler.add(fixation_crossRoutineBegin(snapshot));
    boucle_5LoopScheduler.add(fixation_crossRoutineEachFrame(snapshot));
    boucle_5LoopScheduler.add(fixation_crossRoutineEnd(snapshot));
    boucle_5LoopScheduler.add(test_last_premRoutineBegin(snapshot));
    boucle_5LoopScheduler.add(test_last_premRoutineEachFrame(snapshot));
    boucle_5LoopScheduler.add(test_last_premRoutineEnd(snapshot));
    boucle_5LoopScheduler.add(taux_réussite_et_feedback_4RoutineBegin(snapshot));
    boucle_5LoopScheduler.add(taux_réussite_et_feedback_4RoutineEachFrame(snapshot));
    boucle_5LoopScheduler.add(taux_réussite_et_feedback_4RoutineEnd(snapshot));
    boucle_5LoopScheduler.add(endLoopIteration(boucle_5LoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function boucle_5LoopEnd() {
  psychoJS.experiment.removeLoop(boucle_5);

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


var items_presentationComponents;
function items_presentationRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'items_presentation'-------
    t = 0;
    items_presentationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    stimuli.setImage(presentation);
    // keep track of which components have finished
    items_presentationComponents = [];
    items_presentationComponents.push(stimuli);
    
    for (const thisComponent of items_presentationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function items_presentationRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'items_presentation'-------
    // get current time
    t = items_presentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stimuli* updates
    if (t >= 0.0 && stimuli.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimuli.tStart = t;  // (not accounting for frame time here)
      stimuli.frameNStart = frameN;  // exact frame index
      
      stimuli.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((stimuli.status === PsychoJS.Status.STARTED || stimuli.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      stimuli.setAutoDraw(false);
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
    for (const thisComponent of items_presentationComponents)
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


function items_presentationRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'items_presentation'-------
    for (const thisComponent of items_presentationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var next_stepComponents;
function next_stepRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'next_step'-------
    t = 0;
    next_stepClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    next_stepComponents = [];
    next_stepComponents.push(transition);
    
    for (const thisComponent of next_stepComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function next_stepRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'next_step'-------
    // get current time
    t = next_stepClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *transition* updates
    if (t >= 0.0 && transition.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      transition.tStart = t;  // (not accounting for frame time here)
      transition.frameNStart = frameN;  // exact frame index
      
      transition.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((transition.status === PsychoJS.Status.STARTED || transition.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      transition.setAutoDraw(false);
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
    for (const thisComponent of next_stepComponents)
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


function next_stepRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'next_step'-------
    for (const thisComponent of next_stepComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _skip_reco_allKeys;
var Task_2_instructionsComponents;
function Task_2_instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Task_2_instructions'-------
    t = 0;
    Task_2_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    skip_reco.keys = undefined;
    skip_reco.rt = undefined;
    _skip_reco_allKeys = [];
    // keep track of which components have finished
    Task_2_instructionsComponents = [];
    Task_2_instructionsComponents.push(instruction_reco);
    Task_2_instructionsComponents.push(skip_reco);
    
    for (const thisComponent of Task_2_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Task_2_instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Task_2_instructions'-------
    // get current time
    t = Task_2_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_reco* updates
    if (t >= 0.0 && instruction_reco.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_reco.tStart = t;  // (not accounting for frame time here)
      instruction_reco.frameNStart = frameN;  // exact frame index
      
      instruction_reco.setAutoDraw(true);
    }

    
    // *skip_reco* updates
    if (t >= 0.0 && skip_reco.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skip_reco.tStart = t;  // (not accounting for frame time here)
      skip_reco.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { skip_reco.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { skip_reco.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { skip_reco.clearEvents(); });
    }

    if (skip_reco.status === PsychoJS.Status.STARTED) {
      let theseKeys = skip_reco.getKeys({keyList: ['space'], waitRelease: false});
      _skip_reco_allKeys = _skip_reco_allKeys.concat(theseKeys);
      if (_skip_reco_allKeys.length > 0) {
        skip_reco.keys = _skip_reco_allKeys[_skip_reco_allKeys.length - 1].name;  // just the last key pressed
        skip_reco.rt = _skip_reco_allKeys[_skip_reco_allKeys.length - 1].rt;
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
    for (const thisComponent of Task_2_instructionsComponents)
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


function Task_2_instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Task_2_instructions'-------
    for (const thisComponent of Task_2_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('skip_reco.keys', skip_reco.keys);
    if (typeof skip_reco.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('skip_reco.rt', skip_reco.rt);
        routineTimer.reset();
        }
    
    skip_reco.stop();
    // the Routine "Task_2_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var test_recoComponents;
function test_recoRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'test_reco'-------
    t = 0;
    test_recoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    reco.setImage(test_learning);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    test_recoComponents = [];
    test_recoComponents.push(reco);
    test_recoComponents.push(key_resp);
    
    for (const thisComponent of test_recoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test_recoRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'test_reco'-------
    // get current time
    t = test_recoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *reco* updates
    if (t >= 0.0 && reco.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reco.tStart = t;  // (not accounting for frame time here)
      reco.frameNStart = frameN;  // exact frame index
      
      reco.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['up', 'down'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == answer_1) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
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
    for (const thisComponent of test_recoComponents)
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


function test_recoRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'test_reco'-------
    for (const thisComponent of test_recoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(answer_1)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "test_reco" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var skipThisTrial;
var accuracy_and_feedback_1Components;
function accuracy_and_feedback_1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'accuracy_and_feedback_1'-------
    t = 0;
    accuracy_and_feedback_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    trial = (trial + 1);
    acc = (a / trial);
    if ((key_resp.corr === 1)) {
        a = (a + 1);
        message_1 = "Correct";
        message_2 = "";
    } else {
        a = (a + 0);
        message_2 = "Oops! That was wrong";
        message_1 = "";
    }
    if (((trial === 6) && (acc >= 0.8))) {
        boucle_2.finished = true;
        skipThisTrial = true;
        continueRoutine = false;
    }
    if (((trial === 6) && (acc < 0.8))) {
        a = 0;
        trial = 0;
        acc = 0;
    }
    
    text_2.setText(message_1);
    text_3.setText(message_2);
    // keep track of which components have finished
    accuracy_and_feedback_1Components = [];
    accuracy_and_feedback_1Components.push(text_2);
    accuracy_and_feedback_1Components.push(text_3);
    
    for (const thisComponent of accuracy_and_feedback_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function accuracy_and_feedback_1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'accuracy_and_feedback_1'-------
    // get current time
    t = accuracy_and_feedback_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_2.status === PsychoJS.Status.STARTED || text_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_3.status === PsychoJS.Status.STARTED || text_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_3.setAutoDraw(false);
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
    for (const thisComponent of accuracy_and_feedback_1Components)
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


function accuracy_and_feedback_1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'accuracy_and_feedback_1'-------
    for (const thisComponent of accuracy_and_feedback_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _skip_premice_allKeys;
var Task_4_InstructionsComponents;
function Task_4_InstructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Task_4_Instructions'-------
    t = 0;
    Task_4_InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    skip_premice.keys = undefined;
    skip_premice.rt = undefined;
    _skip_premice_allKeys = [];
    // keep track of which components have finished
    Task_4_InstructionsComponents = [];
    Task_4_InstructionsComponents.push(instruction_premice);
    Task_4_InstructionsComponents.push(skip_premice);
    
    for (const thisComponent of Task_4_InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Task_4_InstructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Task_4_Instructions'-------
    // get current time
    t = Task_4_InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_premice* updates
    if (t >= 0.0 && instruction_premice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_premice.tStart = t;  // (not accounting for frame time here)
      instruction_premice.frameNStart = frameN;  // exact frame index
      
      instruction_premice.setAutoDraw(true);
    }

    
    // *skip_premice* updates
    if (t >= 0.0 && skip_premice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skip_premice.tStart = t;  // (not accounting for frame time here)
      skip_premice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { skip_premice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { skip_premice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { skip_premice.clearEvents(); });
    }

    if (skip_premice.status === PsychoJS.Status.STARTED) {
      let theseKeys = skip_premice.getKeys({keyList: ['space'], waitRelease: false});
      _skip_premice_allKeys = _skip_premice_allKeys.concat(theseKeys);
      if (_skip_premice_allKeys.length > 0) {
        skip_premice.keys = _skip_premice_allKeys[_skip_premice_allKeys.length - 1].name;  // just the last key pressed
        skip_premice.rt = _skip_premice_allKeys[_skip_premice_allKeys.length - 1].rt;
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
    for (const thisComponent of Task_4_InstructionsComponents)
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


function Task_4_InstructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Task_4_Instructions'-------
    for (const thisComponent of Task_4_InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('skip_premice.keys', skip_premice.keys);
    if (typeof skip_premice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('skip_premice.rt', skip_premice.rt);
        routineTimer.reset();
        }
    
    skip_premice.stop();
    // the Routine "Task_4_Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var test_premiceComponents;
function test_premiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'test_premice'-------
    t = 0;
    test_premiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    premice.setImage(premice_pairs);
    tete.setImage(smiley);
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    test_premiceComponents = [];
    test_premiceComponents.push(premice);
    test_premiceComponents.push(tete);
    test_premiceComponents.push(key_resp_3);
    
    for (const thisComponent of test_premiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test_premiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'test_premice'-------
    // get current time
    t = test_premiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *premice* updates
    if (t >= 0.0 && premice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      premice.tStart = t;  // (not accounting for frame time here)
      premice.frameNStart = frameN;  // exact frame index
      
      premice.setAutoDraw(true);
    }

    
    // *tete* updates
    if (t >= 0.0 && tete.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tete.tStart = t;  // (not accounting for frame time here)
      tete.frameNStart = frameN;  // exact frame index
      
      tete.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['up', 'down'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_3.keys == answer_3) {
            key_resp_3.corr = 1;
        } else {
            key_resp_3.corr = 0;
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
    for (const thisComponent of test_premiceComponents)
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


function test_premiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'test_premice'-------
    for (const thisComponent of test_premiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_3.keys === undefined) {
      if (['None','none',undefined].includes(answer_3)) {
         key_resp_3.corr = 1;  // correct non-response
      } else {
         key_resp_3.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    psychoJS.experiment.addData('key_resp_3.corr', key_resp_3.corr);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "test_premice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Taux_réussite_et_feedback_3Components;
function Taux_réussite_et_feedback_3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Taux_réussite_et_feedback_3'-------
    t = 0;
    Taux_réussite_et_feedback_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    trialNumber = (trialNumber + 1);
    accuracy = (c / trialNumber);
    if ((key_resp_3.corr === 1)) {
        c = (c + 1);
        message_98 = "Correct";
        message_99 = "";
    } else {
        c = (c + 0);
        message_99 = "Oops! That was wrong";
        message_98 = "";
    }
    if (((trialNumber === 10) && (accuracy >= 0.8))) {
        boucle_4.finished = true;
        skipThisTrial = true;
        continueRoutine = false;
    }
    if (((trialNumber === 10) && (accuracy < 0.8))) {
        c = 0;
        trialNumber = 0;
        accuracy = 0;
    }
    
    text_6.setText(message_98);
    text_7.setText(message_99);
    // keep track of which components have finished
    Taux_réussite_et_feedback_3Components = [];
    Taux_réussite_et_feedback_3Components.push(text_6);
    Taux_réussite_et_feedback_3Components.push(text_7);
    
    for (const thisComponent of Taux_réussite_et_feedback_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Taux_réussite_et_feedback_3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Taux_réussite_et_feedback_3'-------
    // get current time
    t = Taux_réussite_et_feedback_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_6.status === PsychoJS.Status.STARTED || text_6.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_6.setAutoDraw(false);
    }
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_7.status === PsychoJS.Status.STARTED || text_7.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_7.setAutoDraw(false);
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
    for (const thisComponent of Taux_réussite_et_feedback_3Components)
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


function Taux_réussite_et_feedback_3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Taux_réussite_et_feedback_3'-------
    for (const thisComponent of Taux_réussite_et_feedback_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _skip_last_task_allKeys;
var Tache_5_instructionsComponents;
function Tache_5_instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Tache_5_instructions'-------
    t = 0;
    Tache_5_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    skip_last_task.keys = undefined;
    skip_last_task.rt = undefined;
    _skip_last_task_allKeys = [];
    // keep track of which components have finished
    Tache_5_instructionsComponents = [];
    Tache_5_instructionsComponents.push(instr_premice);
    Tache_5_instructionsComponents.push(skip_last_task);
    
    for (const thisComponent of Tache_5_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Tache_5_instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Tache_5_instructions'-------
    // get current time
    t = Tache_5_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_premice* updates
    if (t >= 0.0 && instr_premice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_premice.tStart = t;  // (not accounting for frame time here)
      instr_premice.frameNStart = frameN;  // exact frame index
      
      instr_premice.setAutoDraw(true);
    }

    
    // *skip_last_task* updates
    if (t >= 0.0 && skip_last_task.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skip_last_task.tStart = t;  // (not accounting for frame time here)
      skip_last_task.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { skip_last_task.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { skip_last_task.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { skip_last_task.clearEvents(); });
    }

    if (skip_last_task.status === PsychoJS.Status.STARTED) {
      let theseKeys = skip_last_task.getKeys({keyList: ['space'], waitRelease: false});
      _skip_last_task_allKeys = _skip_last_task_allKeys.concat(theseKeys);
      if (_skip_last_task_allKeys.length > 0) {
        skip_last_task.keys = _skip_last_task_allKeys[_skip_last_task_allKeys.length - 1].name;  // just the last key pressed
        skip_last_task.rt = _skip_last_task_allKeys[_skip_last_task_allKeys.length - 1].rt;
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
    for (const thisComponent of Tache_5_instructionsComponents)
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


function Tache_5_instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Tache_5_instructions'-------
    for (const thisComponent of Tache_5_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('skip_last_task.keys', skip_last_task.keys);
    if (typeof skip_last_task.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('skip_last_task.rt', skip_last_task.rt);
        routineTimer.reset();
        }
    
    skip_last_task.stop();
    // the Routine "Tache_5_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var test_last_premComponents;
function test_last_premRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'test_last_prem'-------
    t = 0;
    test_last_premClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    prem.setImage(prem_pair_nf);
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    test_last_premComponents = [];
    test_last_premComponents.push(prem);
    test_last_premComponents.push(key_resp_5);
    
    for (const thisComponent of test_last_premComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test_last_premRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'test_last_prem'-------
    // get current time
    t = test_last_premClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prem* updates
    if (t >= 0.0 && prem.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prem.tStart = t;  // (not accounting for frame time here)
      prem.frameNStart = frameN;  // exact frame index
      
      prem.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['up', 'down'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_5.keys == answer_4) {
            key_resp_5.corr = 1;
        } else {
            key_resp_5.corr = 0;
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
    for (const thisComponent of test_last_premComponents)
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


function test_last_premRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'test_last_prem'-------
    for (const thisComponent of test_last_premComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_5.keys === undefined) {
      if (['None','none',undefined].includes(answer_4)) {
         key_resp_5.corr = 1;  // correct non-response
      } else {
         key_resp_5.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    psychoJS.experiment.addData('key_resp_5.corr', key_resp_5.corr);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "test_last_prem" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var taux_réussite_et_feedback_4Components;
function taux_réussite_et_feedback_4RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'taux_réussite_et_feedback_4'-------
    t = 0;
    taux_réussite_et_feedback_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    trialNumbers1 = (trialNumbers1 + 1);
    accuracys1 = (cs1 / trialNumbers1);
    if ((key_resp_5.corr === 1)) {
        cs1 = (cs1 + 1);
    } else {
        cs1 = (cs1 + 0);
    }
    if (((trialNumbers1 === 10) && (accuracys1 >= 0.8))) {
        boucle_5.finished = true;
        skipThisTrial = true;
        continueRoutine = false;
    }
    if (((trialNumbers1 === 10) && (accuracys1 < 0.8))) {
        cs1 = 0;
        trialNumbers1 = 0;
        accuracys1 = 0;
    }
    
    // keep track of which components have finished
    taux_réussite_et_feedback_4Components = [];
    
    for (const thisComponent of taux_réussite_et_feedback_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function taux_réussite_et_feedback_4RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'taux_réussite_et_feedback_4'-------
    // get current time
    t = taux_réussite_et_feedback_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of taux_réussite_et_feedback_4Components)
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


function taux_réussite_et_feedback_4RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'taux_réussite_et_feedback_4'-------
    for (const thisComponent of taux_réussite_et_feedback_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "taux_réussite_et_feedback_4" was not non-slip safe, so reset the non-slip timer
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
