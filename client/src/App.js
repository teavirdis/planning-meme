import React, {Component} from 'react';
import NavigationBar from "./components/navigation/NavigationBar";
import MainArea from "./components/mainarea/MainArea";
import Footer from "./components/mainarea/footer/Footer";

import jQuery from 'jquery'
import $ from "jquery";

jQuery('#mainNavBar').hide();
jQuery('#storyArea').hide();
$("[name='collapseHref']").click(function(){
    $(".collapse").collapse('hide');
    jQuery('#mainNavBar').hide();
    jQuery('#boardArea').show();
    jQuery('#storyArea').hide();
    jQuery('#loginNavBar').show();
});
$("[name='collapseLogin']").click( function(e) {
    jQuery('.collapse').collapse('hide');
    jQuery('#loginNavBar').hide();
    jQuery('#boardArea').show();
    jQuery('#storyArea').hide();
    jQuery('#mainNavBar').show();
});
class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <MainArea/>
                <Footer/>
            </div>
        );
    }
}

export default App;
