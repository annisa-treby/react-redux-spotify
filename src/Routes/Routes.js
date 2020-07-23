import React from "react";
import {Route, Switch} from "react-router-dom";
import Song from "../component/song/Song";
import Home from "../component/song/Home";
import Artist from "../component/Artist/Artist";
import Album from "../component/Album/Album"

function Routes() {
return(
    <Switch>
        <Route path="/home" render={()=> <Home />}/>
        <Route path="/songs" render={()=> <Song/>}/>
      <Route path="/artists" render={()=> <Artist/>}/>
      <Route path="/albums" render={()=> <Album/>}/>
    </Switch>
)
}
export default Routes;