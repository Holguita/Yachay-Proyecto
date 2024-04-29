gdjs.MENUCode = {};


gdjs.MENUCode.GDFONDOObjects1= [];
gdjs.MENUCode.GDQUIMICAObjects1= [];
gdjs.MENUCode.GDINGLESObjects1= [];
gdjs.MENUCode.GDLOGOObjects1= [];
gdjs.MENUCode.GDINDICACIONObjects1= [];
gdjs.MENUCode.GDFONDITOObjects1= [];
gdjs.MENUCode.GDINGISNIAObjects1= [];

gdjs.MENUCode.conditionTrue_0 = {val:false};
gdjs.MENUCode.condition0IsTrue_0 = {val:false};
gdjs.MENUCode.condition1IsTrue_0 = {val:false};
gdjs.MENUCode.condition2IsTrue_0 = {val:false};

gdjs.MENUCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.MENUCode.GDFONDOObjects1.length = 0;
gdjs.MENUCode.GDQUIMICAObjects1.length = 0;
gdjs.MENUCode.GDINGLESObjects1.length = 0;
gdjs.MENUCode.GDLOGOObjects1.length = 0;
gdjs.MENUCode.GDINDICACIONObjects1.length = 0;
gdjs.MENUCode.GDFONDITOObjects1.length = 0;
gdjs.MENUCode.GDINGISNIAObjects1.length = 0;


{

gdjs.MENUCode.GDINGLESObjects1.createFrom(runtimeScene.getObjects("INGLES"));

gdjs.MENUCode.condition0IsTrue_0.val = false;
gdjs.MENUCode.condition1IsTrue_0.val = false;
{
gdjs.MENUCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("INGLES", gdjs.MENUCode.GDINGLESObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if ( gdjs.MENUCode.condition0IsTrue_0.val ) {
{
gdjs.MENUCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MENUCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "INGLES", false);
}}

}


{

gdjs.MENUCode.GDQUIMICAObjects1.createFrom(runtimeScene.getObjects("QUIMICA"));

gdjs.MENUCode.condition0IsTrue_0.val = false;
gdjs.MENUCode.condition1IsTrue_0.val = false;
{
gdjs.MENUCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("QUIMICA", gdjs.MENUCode.GDQUIMICAObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if ( gdjs.MENUCode.condition0IsTrue_0.val ) {
{
gdjs.MENUCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MENUCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QUIMICA", false);
}}

}

return;
}
gdjs['MENUCode']= gdjs.MENUCode;
