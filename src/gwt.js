function applalg(){
  var $wnd_0 = window;


  applalg.__sendStats = function () {};
  applalg.__moduleName = 'applalg';
  applalg.__errFn = null;
  applalg.__moduleBase = 'DUMMY';
  applalg.__softPermutationId = 0;
  applalg.__computePropValue = null;
  applalg.__getPropMap = null;
  applalg.__installRunAsyncCode = function(){
  }
  ;
  applalg.__gwtStartLoadingFragment = function(){
    return null;
  }
  ;
  applalg.__gwt_isKnownPropertyValue = function(){
    return false;
  }
  ;
  applalg.__gwt_getMetaProperty = function(){
    return null;
  }
  ;
  var __propertyErrorFunction = null;
  var activeModules = $wnd_0.__gwt_activeModules = $wnd_0.__gwt_activeModules || {};
  activeModules['applalg'] = {moduleName:'applalg'};
  applalg.__moduleStartupDone = function(permProps){
    var oldBindings = activeModules['applalg'].bindings;
    activeModules['applalg'].bindings = function(){
      var props = oldBindings?oldBindings():{};
      var embeddedProps = permProps[applalg.__softPermutationId];
      for (var i = 0; i < embeddedProps.length; i++) {
        var pair = embeddedProps[i];
        props[pair[0]] = pair[1];
      }
      return props;
    }
    ;
  }
  ;
  var frameDoc;

  activeModules['applalg'].moduleBase = applalg.__moduleBase;


  return true;
}

applalg.succeeded = applalg();
