#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.2.10),
    on Mon Mar  1 18:58:16 2021
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.2.10'
expName = 'BTY2'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/ivankamacharov/Desktop/Transitive Inference/1-TIT_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1280, 720], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color='white', colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Introduction"
IntroductionClock = core.Clock()
texte_bienvenue = visual.TextStim(win=win, name='texte_bienvenue',
    text='Welcome to the first session in the experiment!\n\nThis experiment is made up of 4 sessions (2 in the evening, and 2 in the following mornings).\n\nRemember you can always withdraw from the experiment at any time without giving any reason. To do so, press the [Esc] key. You will only receive the credits you’ve accrued.\n\n[Press spacebar to continue]',
    font='Arial',
    pos=(0,0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
skip_bienvenue = keyboard.Keyboard()

# Initialize components for Routine "Task_1_Instructions"
Task_1_InstructionsClock = core.Clock()
instruction_stimuli = visual.TextStim(win=win, name='instruction_stimuli',
    text='Now, a series of pictures will be displayed. All you have to do is remember the objects being presented.\n\n[Press spacebar to continue]',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
skip_presentation = keyboard.Keyboard()

# Initialize components for Routine "fixation_cross"
fixation_crossClock = core.Clock()
cross = visual.ShapeStim(
    win=win, name='cross', vertices='cross',
    size=(0.2, 0.2),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor='lightblue', lineColorSpace='rgb',
    fillColor='lightblue', fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)

# Initialize components for Routine "items_presentation"
items_presentationClock = core.Clock()
stimuli = visual.ImageStim(
    win=win,
    name='stimuli', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.4, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)

# Initialize components for Routine "next_step"
next_stepClock = core.Clock()
transition = visual.TextStim(win=win, name='transition',
    text='Get ready for the next step!',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='red', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "Task_2_instructions"
Task_2_instructionsClock = core.Clock()
instruction_reco = visual.TextStim(win=win, name='instruction_reco',
    text='This part is a rocognition task. The items you saw in the last part will be presented with a distractor. Press [up] or [down] on your keyboard to select the item you think was shown previously.\n\nYou will receive a feedback after each trial. Depending on your accuracy, you may have to try again.\n\n[Press spacebar to continue]',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
skip_reco = keyboard.Keyboard()

# Initialize components for Routine "fixation_cross"
fixation_crossClock = core.Clock()
cross = visual.ShapeStim(
    win=win, name='cross', vertices='cross',
    size=(0.2, 0.2),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor='lightblue', lineColorSpace='rgb',
    fillColor='lightblue', fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)

# Initialize components for Routine "test_reco"
test_recoClock = core.Clock()
reco = visual.ImageStim(
    win=win,
    name='reco', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.4, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
key_resp = keyboard.Keyboard()

# Initialize components for Routine "accuracy_and_feedback_1"
accuracy_and_feedback_1Clock = core.Clock()
acc=0
trial=0
key_resp.corr=0
a=0
message_1=""
message_2=""
text_2 = visual.TextStim(win=win, name='text_2',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='blue', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
text_3 = visual.TextStim(win=win, name='text_3',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='red', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "next_step"
next_stepClock = core.Clock()
transition = visual.TextStim(win=win, name='transition',
    text='Get ready for the next step!',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='red', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "Task_4_Instructions"
Task_4_InstructionsClock = core.Clock()
instruction_premice = visual.TextStim(win=win, name='instruction_premice',
    text='Now, pairs of items will be displayed.\n\n For each of them, you have to find out which one is hiding a smiley face by pressing the [up] or [down] button. You will receive feedback for each pair.\n\n[Press spacebar to continue]',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
skip_premice = keyboard.Keyboard()

# Initialize components for Routine "fixation_cross"
fixation_crossClock = core.Clock()
cross = visual.ShapeStim(
    win=win, name='cross', vertices='cross',
    size=(0.2, 0.2),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor='lightblue', lineColorSpace='rgb',
    fillColor='lightblue', fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)

# Initialize components for Routine "test_premice"
test_premiceClock = core.Clock()
premice = visual.ImageStim(
    win=win,
    name='premice', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.4, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
tete = visual.ImageStim(
    win=win,
    name='tete', 
    image='sin', mask=None,
    ori=0, pos=(-0.3, 0), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
key_resp_3 = keyboard.Keyboard()

# Initialize components for Routine "Taux_réussite_et_feedback_3"
Taux_réussite_et_feedback_3Clock = core.Clock()
accuracy=0
trialNumber=0
key_resp_3.corr=0
c=0
message_98=""
message_99=""
text_6 = visual.TextStim(win=win, name='text_6',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='blue', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
text_7 = visual.TextStim(win=win, name='text_7',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='red', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "next_step"
next_stepClock = core.Clock()
transition = visual.TextStim(win=win, name='transition',
    text='Get ready for the next step!',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='red', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "Tache_5_instructions"
Tache_5_instructionsClock = core.Clock()
instr_premice = visual.TextStim(win=win, name='instr_premice',
    text='This is the final part of the session 1. \n\nThis part is identical to the previous one. However, you will receive no feedback this time.\n\nDepending on the level of your accuracy, you may be expected to repeat the task.\n\n[Press spacebar to continue]',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
skip_last_task = keyboard.Keyboard()

# Initialize components for Routine "fixation_cross"
fixation_crossClock = core.Clock()
cross = visual.ShapeStim(
    win=win, name='cross', vertices='cross',
    size=(0.2, 0.2),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor='lightblue', lineColorSpace='rgb',
    fillColor='lightblue', fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)

# Initialize components for Routine "test_last_prem"
test_last_premClock = core.Clock()
prem = visual.ImageStim(
    win=win,
    name='prem', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.4, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)
key_resp_5 = keyboard.Keyboard()

# Initialize components for Routine "taux_réussite_et_feedback_4"
taux_réussite_et_feedback_4Clock = core.Clock()
accuracys1=0
trialNumbers1=0
key_resp_5.corrs1=0
cs1=0

# Initialize components for Routine "Fin_session_1"
Fin_session_1Clock = core.Clock()
text_5 = visual.TextStim(win=win, name='text_5',
    text='This is the end of session 1!\n\nSee you tomorrow for session 2, which will take less time than this one. \n\nRest well, and don’t forget to put your eyemask on. :)\n\n(Press [spacebar] to finish)',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_4 = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Introduction"-------
continueRoutine = True
# update component parameters for each repeat
skip_bienvenue.keys = []
skip_bienvenue.rt = []
_skip_bienvenue_allKeys = []
# keep track of which components have finished
IntroductionComponents = [texte_bienvenue, skip_bienvenue]
for thisComponent in IntroductionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
IntroductionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Introduction"-------
while continueRoutine:
    # get current time
    t = IntroductionClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=IntroductionClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *texte_bienvenue* updates
    if texte_bienvenue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        texte_bienvenue.frameNStart = frameN  # exact frame index
        texte_bienvenue.tStart = t  # local t and not account for scr refresh
        texte_bienvenue.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(texte_bienvenue, 'tStartRefresh')  # time at next scr refresh
        texte_bienvenue.setAutoDraw(True)
    
    # *skip_bienvenue* updates
    waitOnFlip = False
    if skip_bienvenue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        skip_bienvenue.frameNStart = frameN  # exact frame index
        skip_bienvenue.tStart = t  # local t and not account for scr refresh
        skip_bienvenue.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(skip_bienvenue, 'tStartRefresh')  # time at next scr refresh
        skip_bienvenue.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(skip_bienvenue.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(skip_bienvenue.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if skip_bienvenue.status == STARTED and not waitOnFlip:
        theseKeys = skip_bienvenue.getKeys(keyList=['space'], waitRelease=False)
        _skip_bienvenue_allKeys.extend(theseKeys)
        if len(_skip_bienvenue_allKeys):
            skip_bienvenue.keys = _skip_bienvenue_allKeys[-1].name  # just the last key pressed
            skip_bienvenue.rt = _skip_bienvenue_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in IntroductionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Introduction"-------
for thisComponent in IntroductionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if skip_bienvenue.keys in ['', [], None]:  # No response was made
    skip_bienvenue.keys = None
thisExp.addData('skip_bienvenue.keys',skip_bienvenue.keys)
if skip_bienvenue.keys != None:  # we had a response
    thisExp.addData('skip_bienvenue.rt', skip_bienvenue.rt)
thisExp.nextEntry()
# the Routine "Introduction" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Task_1_Instructions"-------
continueRoutine = True
# update component parameters for each repeat
skip_presentation.keys = []
skip_presentation.rt = []
_skip_presentation_allKeys = []
# keep track of which components have finished
Task_1_InstructionsComponents = [instruction_stimuli, skip_presentation]
for thisComponent in Task_1_InstructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Task_1_InstructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Task_1_Instructions"-------
while continueRoutine:
    # get current time
    t = Task_1_InstructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Task_1_InstructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruction_stimuli* updates
    if instruction_stimuli.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_stimuli.frameNStart = frameN  # exact frame index
        instruction_stimuli.tStart = t  # local t and not account for scr refresh
        instruction_stimuli.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_stimuli, 'tStartRefresh')  # time at next scr refresh
        instruction_stimuli.setAutoDraw(True)
    
    # *skip_presentation* updates
    waitOnFlip = False
    if skip_presentation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        skip_presentation.frameNStart = frameN  # exact frame index
        skip_presentation.tStart = t  # local t and not account for scr refresh
        skip_presentation.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(skip_presentation, 'tStartRefresh')  # time at next scr refresh
        skip_presentation.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(skip_presentation.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(skip_presentation.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if skip_presentation.status == STARTED and not waitOnFlip:
        theseKeys = skip_presentation.getKeys(keyList=['space'], waitRelease=False)
        _skip_presentation_allKeys.extend(theseKeys)
        if len(_skip_presentation_allKeys):
            skip_presentation.keys = _skip_presentation_allKeys[-1].name  # just the last key pressed
            skip_presentation.rt = _skip_presentation_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Task_1_InstructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Task_1_Instructions"-------
for thisComponent in Task_1_InstructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if skip_presentation.keys in ['', [], None]:  # No response was made
    skip_presentation.keys = None
thisExp.addData('skip_presentation.keys',skip_presentation.keys)
if skip_presentation.keys != None:  # we had a response
    thisExp.addData('skip_presentation.rt', skip_presentation.rt)
thisExp.nextEntry()
# the Routine "Task_1_Instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
loop = data.TrialHandler(nReps=2, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('3-Variables.xlsx', selection='0:6'),
    seed=None, name='loop')
thisExp.addLoop(loop)  # add the loop to the experiment
thisLoop = loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisLoop.rgb)
if thisLoop != None:
    for paramName in thisLoop:
        exec('{} = thisLoop[paramName]'.format(paramName))

for thisLoop in loop:
    currentLoop = loop
    # abbreviate parameter names if possible (e.g. rgb = thisLoop.rgb)
    if thisLoop != None:
        for paramName in thisLoop:
            exec('{} = thisLoop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "fixation_cross"-------
    continueRoutine = True
    routineTimer.add(1.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixation_crossComponents = [cross]
    for thisComponent in fixation_crossComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    fixation_crossClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "fixation_cross"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = fixation_crossClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=fixation_crossClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *cross* updates
        if cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cross.frameNStart = frameN  # exact frame index
            cross.tStart = t  # local t and not account for scr refresh
            cross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cross, 'tStartRefresh')  # time at next scr refresh
            cross.setAutoDraw(True)
        if cross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > cross.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                cross.tStop = t  # not accounting for scr refresh
                cross.frameNStop = frameN  # exact frame index
                win.timeOnFlip(cross, 'tStopRefresh')  # time at next scr refresh
                cross.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixation_crossComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "fixation_cross"-------
    for thisComponent in fixation_crossComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    # ------Prepare to start Routine "items_presentation"-------
    continueRoutine = True
    routineTimer.add(2.500000)
    # update component parameters for each repeat
    stimuli.setImage(presentation)
    # keep track of which components have finished
    items_presentationComponents = [stimuli]
    for thisComponent in items_presentationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    items_presentationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "items_presentation"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = items_presentationClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=items_presentationClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *stimuli* updates
        if stimuli.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            stimuli.frameNStart = frameN  # exact frame index
            stimuli.tStart = t  # local t and not account for scr refresh
            stimuli.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stimuli, 'tStartRefresh')  # time at next scr refresh
            stimuli.setAutoDraw(True)
        if stimuli.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stimuli.tStartRefresh + 2.5-frameTolerance:
                # keep track of stop time/frame for later
                stimuli.tStop = t  # not accounting for scr refresh
                stimuli.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stimuli, 'tStopRefresh')  # time at next scr refresh
                stimuli.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in items_presentationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "items_presentation"-------
    for thisComponent in items_presentationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.nextEntry()
    
# completed 2 repeats of 'loop'

# get names of stimulus parameters
if loop.trialList in ([], [None], None):
    params = []
else:
    params = loop.trialList[0].keys()
# save data for this loop
loop.saveAsText(filename + 'loop.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "next_step"-------
continueRoutine = True
routineTimer.add(1.500000)
# update component parameters for each repeat
# keep track of which components have finished
next_stepComponents = [transition]
for thisComponent in next_stepComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
next_stepClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "next_step"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = next_stepClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=next_stepClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *transition* updates
    if transition.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        transition.frameNStart = frameN  # exact frame index
        transition.tStart = t  # local t and not account for scr refresh
        transition.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(transition, 'tStartRefresh')  # time at next scr refresh
        transition.setAutoDraw(True)
    if transition.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > transition.tStartRefresh + 1.5-frameTolerance:
            # keep track of stop time/frame for later
            transition.tStop = t  # not accounting for scr refresh
            transition.frameNStop = frameN  # exact frame index
            win.timeOnFlip(transition, 'tStopRefresh')  # time at next scr refresh
            transition.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in next_stepComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "next_step"-------
for thisComponent in next_stepComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# ------Prepare to start Routine "Task_2_instructions"-------
continueRoutine = True
# update component parameters for each repeat
skip_reco.keys = []
skip_reco.rt = []
_skip_reco_allKeys = []
# keep track of which components have finished
Task_2_instructionsComponents = [instruction_reco, skip_reco]
for thisComponent in Task_2_instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Task_2_instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Task_2_instructions"-------
while continueRoutine:
    # get current time
    t = Task_2_instructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Task_2_instructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruction_reco* updates
    if instruction_reco.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_reco.frameNStart = frameN  # exact frame index
        instruction_reco.tStart = t  # local t and not account for scr refresh
        instruction_reco.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_reco, 'tStartRefresh')  # time at next scr refresh
        instruction_reco.setAutoDraw(True)
    
    # *skip_reco* updates
    waitOnFlip = False
    if skip_reco.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        skip_reco.frameNStart = frameN  # exact frame index
        skip_reco.tStart = t  # local t and not account for scr refresh
        skip_reco.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(skip_reco, 'tStartRefresh')  # time at next scr refresh
        skip_reco.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(skip_reco.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(skip_reco.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if skip_reco.status == STARTED and not waitOnFlip:
        theseKeys = skip_reco.getKeys(keyList=['space'], waitRelease=False)
        _skip_reco_allKeys.extend(theseKeys)
        if len(_skip_reco_allKeys):
            skip_reco.keys = _skip_reco_allKeys[-1].name  # just the last key pressed
            skip_reco.rt = _skip_reco_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Task_2_instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Task_2_instructions"-------
for thisComponent in Task_2_instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if skip_reco.keys in ['', [], None]:  # No response was made
    skip_reco.keys = None
thisExp.addData('skip_reco.keys',skip_reco.keys)
if skip_reco.keys != None:  # we had a response
    thisExp.addData('skip_reco.rt', skip_reco.rt)
thisExp.nextEntry()
# the Routine "Task_2_instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
boucle_2 = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('3-Variables.xlsx', selection='0:60'),
    seed=None, name='boucle_2')
thisExp.addLoop(boucle_2)  # add the loop to the experiment
thisBoucle_2 = boucle_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBoucle_2.rgb)
if thisBoucle_2 != None:
    for paramName in thisBoucle_2:
        exec('{} = thisBoucle_2[paramName]'.format(paramName))

for thisBoucle_2 in boucle_2:
    currentLoop = boucle_2
    # abbreviate parameter names if possible (e.g. rgb = thisBoucle_2.rgb)
    if thisBoucle_2 != None:
        for paramName in thisBoucle_2:
            exec('{} = thisBoucle_2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "fixation_cross"-------
    continueRoutine = True
    routineTimer.add(1.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixation_crossComponents = [cross]
    for thisComponent in fixation_crossComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    fixation_crossClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "fixation_cross"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = fixation_crossClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=fixation_crossClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *cross* updates
        if cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cross.frameNStart = frameN  # exact frame index
            cross.tStart = t  # local t and not account for scr refresh
            cross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cross, 'tStartRefresh')  # time at next scr refresh
            cross.setAutoDraw(True)
        if cross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > cross.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                cross.tStop = t  # not accounting for scr refresh
                cross.frameNStop = frameN  # exact frame index
                win.timeOnFlip(cross, 'tStopRefresh')  # time at next scr refresh
                cross.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixation_crossComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "fixation_cross"-------
    for thisComponent in fixation_crossComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    # ------Prepare to start Routine "test_reco"-------
    continueRoutine = True
    # update component parameters for each repeat
    reco.setImage(test_learning)
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    # keep track of which components have finished
    test_recoComponents = [reco, key_resp]
    for thisComponent in test_recoComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    test_recoClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "test_reco"-------
    while continueRoutine:
        # get current time
        t = test_recoClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=test_recoClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *reco* updates
        if reco.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            reco.frameNStart = frameN  # exact frame index
            reco.tStart = t  # local t and not account for scr refresh
            reco.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(reco, 'tStartRefresh')  # time at next scr refresh
            reco.setAutoDraw(True)
        
        # *key_resp* updates
        waitOnFlip = False
        if key_resp.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            key_resp.frameNStart = frameN  # exact frame index
            key_resp.tStart = t  # local t and not account for scr refresh
            key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
            key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp.status == STARTED and not waitOnFlip:
            theseKeys = key_resp.getKeys(keyList=['up', 'down'], waitRelease=False)
            _key_resp_allKeys.extend(theseKeys)
            if len(_key_resp_allKeys):
                key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                key_resp.rt = _key_resp_allKeys[-1].rt
                # was this correct?
                if (key_resp.keys == str(answer_1)) or (key_resp.keys == answer_1):
                    key_resp.corr = 1
                else:
                    key_resp.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in test_recoComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "test_reco"-------
    for thisComponent in test_recoComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp.keys in ['', [], None]:  # No response was made
        key_resp.keys = None
        # was no response the correct answer?!
        if str(answer_1).lower() == 'none':
           key_resp.corr = 1;  # correct non-response
        else:
           key_resp.corr = 0;  # failed to respond (incorrectly)
    # store data for boucle_2 (TrialHandler)
    boucle_2.addData('key_resp.keys',key_resp.keys)
    boucle_2.addData('key_resp.corr', key_resp.corr)
    if key_resp.keys != None:  # we had a response
        boucle_2.addData('key_resp.rt', key_resp.rt)
    boucle_2.addData('key_resp.started', key_resp.tStartRefresh)
    boucle_2.addData('key_resp.stopped', key_resp.tStopRefresh)
    # the Routine "test_reco" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "accuracy_and_feedback_1"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    trial=trial+1
    acc=a/trial
    
    
    
    if key_resp.corr==1:
        a=a+1
        message_1="Correct"
        message_2=""
    else:
        a=a+0
        message_2="Oops! That was wrong"
        message_1=""
    
    
    if trial==6 and acc>=0.8:
        boucle_2.finished=True
        skipThisTrial = True
        continueRoutine = False
    
    if trial ==6 and acc<0.8:
        a = 0
        trial = 0
        acc=0
    text_2.setText(message_1)
    text_3.setText(message_2)
    # keep track of which components have finished
    accuracy_and_feedback_1Components = [text_2, text_3]
    for thisComponent in accuracy_and_feedback_1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    accuracy_and_feedback_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "accuracy_and_feedback_1"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = accuracy_and_feedback_1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=accuracy_and_feedback_1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_2* updates
        if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            text_2.setAutoDraw(True)
        if text_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_2.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_2.tStop = t  # not accounting for scr refresh
                text_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_2, 'tStopRefresh')  # time at next scr refresh
                text_2.setAutoDraw(False)
        
        # *text_3* updates
        if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_3.frameNStart = frameN  # exact frame index
            text_3.tStart = t  # local t and not account for scr refresh
            text_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
            text_3.setAutoDraw(True)
        if text_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_3.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_3.tStop = t  # not accounting for scr refresh
                text_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_3, 'tStopRefresh')  # time at next scr refresh
                text_3.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in accuracy_and_feedback_1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "accuracy_and_feedback_1"-------
    for thisComponent in accuracy_and_feedback_1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    boucle_2.addData('text_2.started', text_2.tStartRefresh)
    boucle_2.addData('text_2.stopped', text_2.tStopRefresh)
    boucle_2.addData('text_3.started', text_3.tStartRefresh)
    boucle_2.addData('text_3.stopped', text_3.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1 repeats of 'boucle_2'

# get names of stimulus parameters
if boucle_2.trialList in ([], [None], None):
    params = []
else:
    params = boucle_2.trialList[0].keys()
# save data for this loop
boucle_2.saveAsText(filename + 'boucle_2.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "next_step"-------
continueRoutine = True
routineTimer.add(1.500000)
# update component parameters for each repeat
# keep track of which components have finished
next_stepComponents = [transition]
for thisComponent in next_stepComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
next_stepClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "next_step"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = next_stepClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=next_stepClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *transition* updates
    if transition.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        transition.frameNStart = frameN  # exact frame index
        transition.tStart = t  # local t and not account for scr refresh
        transition.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(transition, 'tStartRefresh')  # time at next scr refresh
        transition.setAutoDraw(True)
    if transition.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > transition.tStartRefresh + 1.5-frameTolerance:
            # keep track of stop time/frame for later
            transition.tStop = t  # not accounting for scr refresh
            transition.frameNStop = frameN  # exact frame index
            win.timeOnFlip(transition, 'tStopRefresh')  # time at next scr refresh
            transition.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in next_stepComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "next_step"-------
for thisComponent in next_stepComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# ------Prepare to start Routine "Task_4_Instructions"-------
continueRoutine = True
# update component parameters for each repeat
skip_premice.keys = []
skip_premice.rt = []
_skip_premice_allKeys = []
# keep track of which components have finished
Task_4_InstructionsComponents = [instruction_premice, skip_premice]
for thisComponent in Task_4_InstructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Task_4_InstructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Task_4_Instructions"-------
while continueRoutine:
    # get current time
    t = Task_4_InstructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Task_4_InstructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruction_premice* updates
    if instruction_premice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_premice.frameNStart = frameN  # exact frame index
        instruction_premice.tStart = t  # local t and not account for scr refresh
        instruction_premice.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_premice, 'tStartRefresh')  # time at next scr refresh
        instruction_premice.setAutoDraw(True)
    
    # *skip_premice* updates
    waitOnFlip = False
    if skip_premice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        skip_premice.frameNStart = frameN  # exact frame index
        skip_premice.tStart = t  # local t and not account for scr refresh
        skip_premice.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(skip_premice, 'tStartRefresh')  # time at next scr refresh
        skip_premice.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(skip_premice.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(skip_premice.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if skip_premice.status == STARTED and not waitOnFlip:
        theseKeys = skip_premice.getKeys(keyList=['space'], waitRelease=False)
        _skip_premice_allKeys.extend(theseKeys)
        if len(_skip_premice_allKeys):
            skip_premice.keys = _skip_premice_allKeys[-1].name  # just the last key pressed
            skip_premice.rt = _skip_premice_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Task_4_InstructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Task_4_Instructions"-------
for thisComponent in Task_4_InstructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if skip_premice.keys in ['', [], None]:  # No response was made
    skip_premice.keys = None
thisExp.addData('skip_premice.keys',skip_premice.keys)
if skip_premice.keys != None:  # we had a response
    thisExp.addData('skip_premice.rt', skip_premice.rt)
thisExp.nextEntry()
# the Routine "Task_4_Instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
boucle_4 = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('3-Variables.xlsx', selection='0:100'),
    seed=None, name='boucle_4')
thisExp.addLoop(boucle_4)  # add the loop to the experiment
thisBoucle_4 = boucle_4.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBoucle_4.rgb)
if thisBoucle_4 != None:
    for paramName in thisBoucle_4:
        exec('{} = thisBoucle_4[paramName]'.format(paramName))

for thisBoucle_4 in boucle_4:
    currentLoop = boucle_4
    # abbreviate parameter names if possible (e.g. rgb = thisBoucle_4.rgb)
    if thisBoucle_4 != None:
        for paramName in thisBoucle_4:
            exec('{} = thisBoucle_4[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "fixation_cross"-------
    continueRoutine = True
    routineTimer.add(1.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixation_crossComponents = [cross]
    for thisComponent in fixation_crossComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    fixation_crossClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "fixation_cross"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = fixation_crossClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=fixation_crossClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *cross* updates
        if cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cross.frameNStart = frameN  # exact frame index
            cross.tStart = t  # local t and not account for scr refresh
            cross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cross, 'tStartRefresh')  # time at next scr refresh
            cross.setAutoDraw(True)
        if cross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > cross.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                cross.tStop = t  # not accounting for scr refresh
                cross.frameNStop = frameN  # exact frame index
                win.timeOnFlip(cross, 'tStopRefresh')  # time at next scr refresh
                cross.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixation_crossComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "fixation_cross"-------
    for thisComponent in fixation_crossComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    # ------Prepare to start Routine "test_premice"-------
    continueRoutine = True
    # update component parameters for each repeat
    premice.setImage(premice_pairs)
    tete.setImage(smiley)
    key_resp_3.keys = []
    key_resp_3.rt = []
    _key_resp_3_allKeys = []
    # keep track of which components have finished
    test_premiceComponents = [premice, tete, key_resp_3]
    for thisComponent in test_premiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    test_premiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "test_premice"-------
    while continueRoutine:
        # get current time
        t = test_premiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=test_premiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *premice* updates
        if premice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            premice.frameNStart = frameN  # exact frame index
            premice.tStart = t  # local t and not account for scr refresh
            premice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(premice, 'tStartRefresh')  # time at next scr refresh
            premice.setAutoDraw(True)
        
        # *tete* updates
        if tete.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            tete.frameNStart = frameN  # exact frame index
            tete.tStart = t  # local t and not account for scr refresh
            tete.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(tete, 'tStartRefresh')  # time at next scr refresh
            tete.setAutoDraw(True)
        
        # *key_resp_3* updates
        waitOnFlip = False
        if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_3.frameNStart = frameN  # exact frame index
            key_resp_3.tStart = t  # local t and not account for scr refresh
            key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
            key_resp_3.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_3.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_3.getKeys(keyList=['up', 'down'], waitRelease=False)
            _key_resp_3_allKeys.extend(theseKeys)
            if len(_key_resp_3_allKeys):
                key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
                key_resp_3.rt = _key_resp_3_allKeys[-1].rt
                # was this correct?
                if (key_resp_3.keys == str(answer_3)) or (key_resp_3.keys == answer_3):
                    key_resp_3.corr = 1
                else:
                    key_resp_3.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in test_premiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "test_premice"-------
    for thisComponent in test_premiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    boucle_4.addData('tete.started', tete.tStartRefresh)
    boucle_4.addData('tete.stopped', tete.tStopRefresh)
    # check responses
    if key_resp_3.keys in ['', [], None]:  # No response was made
        key_resp_3.keys = None
        # was no response the correct answer?!
        if str(answer_3).lower() == 'none':
           key_resp_3.corr = 1;  # correct non-response
        else:
           key_resp_3.corr = 0;  # failed to respond (incorrectly)
    # store data for boucle_4 (TrialHandler)
    boucle_4.addData('key_resp_3.keys',key_resp_3.keys)
    boucle_4.addData('key_resp_3.corr', key_resp_3.corr)
    if key_resp_3.keys != None:  # we had a response
        boucle_4.addData('key_resp_3.rt', key_resp_3.rt)
    # the Routine "test_premice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "Taux_réussite_et_feedback_3"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    trialNumber=trialNumber+1
    accuracy=c/trialNumber
    
    
    
    if key_resp_3.corr ==1:
        c=c+1
        message_98="Correct"
        message_99=""
    
    else:
        c=c+0
        message_99="Oops! That was wrong"
        message_98=""
    
    if trialNumber==10 and accuracy>=0.80:
        boucle_4.finished=True
        skipThisTrial = True
        continueRoutine = False
    
    if trialNumber ==10 and accuracy<0.80:
        c = 0
        trialNumber = 0
        accuracy=0
    text_6.setText(message_98)
    text_7.setText(message_99)
    # keep track of which components have finished
    Taux_réussite_et_feedback_3Components = [text_6, text_7]
    for thisComponent in Taux_réussite_et_feedback_3Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Taux_réussite_et_feedback_3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Taux_réussite_et_feedback_3"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = Taux_réussite_et_feedback_3Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Taux_réussite_et_feedback_3Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_6* updates
        if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_6.frameNStart = frameN  # exact frame index
            text_6.tStart = t  # local t and not account for scr refresh
            text_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
            text_6.setAutoDraw(True)
        if text_6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_6.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_6.tStop = t  # not accounting for scr refresh
                text_6.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_6, 'tStopRefresh')  # time at next scr refresh
                text_6.setAutoDraw(False)
        
        # *text_7* updates
        if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_7.frameNStart = frameN  # exact frame index
            text_7.tStart = t  # local t and not account for scr refresh
            text_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
            text_7.setAutoDraw(True)
        if text_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_7.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_7.tStop = t  # not accounting for scr refresh
                text_7.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_7, 'tStopRefresh')  # time at next scr refresh
                text_7.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Taux_réussite_et_feedback_3Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Taux_réussite_et_feedback_3"-------
    for thisComponent in Taux_réussite_et_feedback_3Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    boucle_4.addData('text_6.started', text_6.tStartRefresh)
    boucle_4.addData('text_6.stopped', text_6.tStopRefresh)
    boucle_4.addData('text_7.started', text_7.tStartRefresh)
    boucle_4.addData('text_7.stopped', text_7.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1 repeats of 'boucle_4'

# get names of stimulus parameters
if boucle_4.trialList in ([], [None], None):
    params = []
else:
    params = boucle_4.trialList[0].keys()
# save data for this loop
boucle_4.saveAsText(filename + 'boucle_4.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "next_step"-------
continueRoutine = True
routineTimer.add(1.500000)
# update component parameters for each repeat
# keep track of which components have finished
next_stepComponents = [transition]
for thisComponent in next_stepComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
next_stepClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "next_step"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = next_stepClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=next_stepClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *transition* updates
    if transition.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        transition.frameNStart = frameN  # exact frame index
        transition.tStart = t  # local t and not account for scr refresh
        transition.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(transition, 'tStartRefresh')  # time at next scr refresh
        transition.setAutoDraw(True)
    if transition.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > transition.tStartRefresh + 1.5-frameTolerance:
            # keep track of stop time/frame for later
            transition.tStop = t  # not accounting for scr refresh
            transition.frameNStop = frameN  # exact frame index
            win.timeOnFlip(transition, 'tStopRefresh')  # time at next scr refresh
            transition.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in next_stepComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "next_step"-------
for thisComponent in next_stepComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# ------Prepare to start Routine "Tache_5_instructions"-------
continueRoutine = True
# update component parameters for each repeat
skip_last_task.keys = []
skip_last_task.rt = []
_skip_last_task_allKeys = []
# keep track of which components have finished
Tache_5_instructionsComponents = [instr_premice, skip_last_task]
for thisComponent in Tache_5_instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Tache_5_instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Tache_5_instructions"-------
while continueRoutine:
    # get current time
    t = Tache_5_instructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Tache_5_instructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instr_premice* updates
    if instr_premice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_premice.frameNStart = frameN  # exact frame index
        instr_premice.tStart = t  # local t and not account for scr refresh
        instr_premice.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_premice, 'tStartRefresh')  # time at next scr refresh
        instr_premice.setAutoDraw(True)
    
    # *skip_last_task* updates
    waitOnFlip = False
    if skip_last_task.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        skip_last_task.frameNStart = frameN  # exact frame index
        skip_last_task.tStart = t  # local t and not account for scr refresh
        skip_last_task.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(skip_last_task, 'tStartRefresh')  # time at next scr refresh
        skip_last_task.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(skip_last_task.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(skip_last_task.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if skip_last_task.status == STARTED and not waitOnFlip:
        theseKeys = skip_last_task.getKeys(keyList=['space'], waitRelease=False)
        _skip_last_task_allKeys.extend(theseKeys)
        if len(_skip_last_task_allKeys):
            skip_last_task.keys = _skip_last_task_allKeys[-1].name  # just the last key pressed
            skip_last_task.rt = _skip_last_task_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Tache_5_instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Tache_5_instructions"-------
for thisComponent in Tache_5_instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if skip_last_task.keys in ['', [], None]:  # No response was made
    skip_last_task.keys = None
thisExp.addData('skip_last_task.keys',skip_last_task.keys)
if skip_last_task.keys != None:  # we had a response
    thisExp.addData('skip_last_task.rt', skip_last_task.rt)
thisExp.nextEntry()
# the Routine "Tache_5_instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
boucle_5 = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('3-Variables.xlsx', selection='0:100'),
    seed=None, name='boucle_5')
thisExp.addLoop(boucle_5)  # add the loop to the experiment
thisBoucle_5 = boucle_5.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBoucle_5.rgb)
if thisBoucle_5 != None:
    for paramName in thisBoucle_5:
        exec('{} = thisBoucle_5[paramName]'.format(paramName))

for thisBoucle_5 in boucle_5:
    currentLoop = boucle_5
    # abbreviate parameter names if possible (e.g. rgb = thisBoucle_5.rgb)
    if thisBoucle_5 != None:
        for paramName in thisBoucle_5:
            exec('{} = thisBoucle_5[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "fixation_cross"-------
    continueRoutine = True
    routineTimer.add(1.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixation_crossComponents = [cross]
    for thisComponent in fixation_crossComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    fixation_crossClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "fixation_cross"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = fixation_crossClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=fixation_crossClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *cross* updates
        if cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cross.frameNStart = frameN  # exact frame index
            cross.tStart = t  # local t and not account for scr refresh
            cross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cross, 'tStartRefresh')  # time at next scr refresh
            cross.setAutoDraw(True)
        if cross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > cross.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                cross.tStop = t  # not accounting for scr refresh
                cross.frameNStop = frameN  # exact frame index
                win.timeOnFlip(cross, 'tStopRefresh')  # time at next scr refresh
                cross.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixation_crossComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "fixation_cross"-------
    for thisComponent in fixation_crossComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    # ------Prepare to start Routine "test_last_prem"-------
    continueRoutine = True
    # update component parameters for each repeat
    prem.setImage(prem_pair_nf)
    key_resp_5.keys = []
    key_resp_5.rt = []
    _key_resp_5_allKeys = []
    # keep track of which components have finished
    test_last_premComponents = [prem, key_resp_5]
    for thisComponent in test_last_premComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    test_last_premClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "test_last_prem"-------
    while continueRoutine:
        # get current time
        t = test_last_premClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=test_last_premClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *prem* updates
        if prem.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            prem.frameNStart = frameN  # exact frame index
            prem.tStart = t  # local t and not account for scr refresh
            prem.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(prem, 'tStartRefresh')  # time at next scr refresh
            prem.setAutoDraw(True)
        
        # *key_resp_5* updates
        waitOnFlip = False
        if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_5.frameNStart = frameN  # exact frame index
            key_resp_5.tStart = t  # local t and not account for scr refresh
            key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
            key_resp_5.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_5.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_5.getKeys(keyList=['up', 'down'], waitRelease=False)
            _key_resp_5_allKeys.extend(theseKeys)
            if len(_key_resp_5_allKeys):
                key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
                key_resp_5.rt = _key_resp_5_allKeys[-1].rt
                # was this correct?
                if (key_resp_5.keys == str(answer_4)) or (key_resp_5.keys == answer_4):
                    key_resp_5.corr = 1
                else:
                    key_resp_5.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in test_last_premComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "test_last_prem"-------
    for thisComponent in test_last_premComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_5.keys in ['', [], None]:  # No response was made
        key_resp_5.keys = None
        # was no response the correct answer?!
        if str(answer_4).lower() == 'none':
           key_resp_5.corr = 1;  # correct non-response
        else:
           key_resp_5.corr = 0;  # failed to respond (incorrectly)
    # store data for boucle_5 (TrialHandler)
    boucle_5.addData('key_resp_5.keys',key_resp_5.keys)
    boucle_5.addData('key_resp_5.corr', key_resp_5.corr)
    if key_resp_5.keys != None:  # we had a response
        boucle_5.addData('key_resp_5.rt', key_resp_5.rt)
    # the Routine "test_last_prem" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "taux_réussite_et_feedback_4"-------
    continueRoutine = True
    # update component parameters for each repeat
    trialNumbers1=trialNumbers1+1
    accuracys1=cs1/trialNumbers1
    
    
    
    if key_resp_5.corr ==1:
        cs1=cs1+1
    
    else:
        cs1=cs1+0
    
    if trialNumbers1==10 and accuracys1>=0.80:
        boucle_5.finished=True
        skipThisTrial = True
        continueRoutine = False
    
    if trialNumbers1 ==10 and accuracys1<0.80:
        cs1 = 0
        trialNumbers1 = 0
        accuracys1=0
    # keep track of which components have finished
    taux_réussite_et_feedback_4Components = []
    for thisComponent in taux_réussite_et_feedback_4Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    taux_réussite_et_feedback_4Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "taux_réussite_et_feedback_4"-------
    while continueRoutine:
        # get current time
        t = taux_réussite_et_feedback_4Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=taux_réussite_et_feedback_4Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in taux_réussite_et_feedback_4Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "taux_réussite_et_feedback_4"-------
    for thisComponent in taux_réussite_et_feedback_4Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "taux_réussite_et_feedback_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'boucle_5'

# get names of stimulus parameters
if boucle_5.trialList in ([], [None], None):
    params = []
else:
    params = boucle_5.trialList[0].keys()
# save data for this loop
boucle_5.saveAsText(filename + 'boucle_5.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "Fin_session_1"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_4.keys = []
key_resp_4.rt = []
_key_resp_4_allKeys = []
# keep track of which components have finished
Fin_session_1Components = [text_5, key_resp_4]
for thisComponent in Fin_session_1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Fin_session_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Fin_session_1"-------
while continueRoutine:
    # get current time
    t = Fin_session_1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Fin_session_1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_5* updates
    if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_5.frameNStart = frameN  # exact frame index
        text_5.tStart = t  # local t and not account for scr refresh
        text_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
        text_5.setAutoDraw(True)
    
    # *key_resp_4* updates
    waitOnFlip = False
    if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_4.frameNStart = frameN  # exact frame index
        key_resp_4.tStart = t  # local t and not account for scr refresh
        key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
        key_resp_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_4.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_4.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_4_allKeys.extend(theseKeys)
        if len(_key_resp_4_allKeys):
            key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
            key_resp_4.rt = _key_resp_4_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Fin_session_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Fin_session_1"-------
for thisComponent in Fin_session_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_4.keys in ['', [], None]:  # No response was made
    key_resp_4.keys = None
thisExp.addData('key_resp_4.keys',key_resp_4.keys)
if key_resp_4.keys != None:  # we had a response
    thisExp.addData('key_resp_4.rt', key_resp_4.rt)
thisExp.addData('key_resp_4.started', key_resp_4.tStartRefresh)
thisExp.addData('key_resp_4.stopped', key_resp_4.tStopRefresh)
thisExp.nextEntry()
# the Routine "Fin_session_1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
