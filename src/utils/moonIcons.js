import {
    WiMoonAltNew,
    WiMoonWaxingCrescent3,
    WiMoonAltFirstQuarter,
    WiMoonAltWaxingGibbous3,
    WiMoonAltFull,
    WiMoonAltWaningGibbous3,
    WiMoonAltThirdQuarter,
    WiMoonAltWaningCrescent3    
} from "react-icons/wi";

const moonIcons = (phase)=>{
    if (phase ===0){
        return{
            icon: WiMoonAltNew,
            description: "New Moon",
            color: "#a5abb1ff" 
        }; 
    
    }
    if(phase >0 && phase <0.25){
        return {
            icon: WiMoonWaxingCrescent3,
            description: "Waxing Crescent",
            color: "#a5abb1ff"

        }
    }
    if(phase >= 0.24 && phase <= 0.26){
        return{
            icon:WiMoonAltFirstQuarter,
            description: "First Quarter",
            color: "#a5abb1ff"
        }
    }
    if(phase >0.25 && phase <0.5){
        return{
            icon: WiMoonAltWaxingGibbous3,
            description: "Waxing Gibbous",
            color: "#a5abb1ff"
        }
    }
    if(phase >= 0.49 && phase <= 0.51){
        return{
            icon:WiMoonAltFull,
            description:"Full Moon",
            color: "#a5abb1ff"
        }
    }
    if(phase >0.5 && phase <0.75){
        return{
            icon: WiMoonAltWaningGibbous3,
            description: "Waning Gibbous",
            color:"#a5abb1ff"
        }
    }
    if(phase >= 0.74 && phase <= 0.76){
        return{
            icon: WiMoonAltThirdQuarter,
            description: "Last Quarter",
            color:"#a5abb1ff"
        }
    }
        return{
            icon:WiMoonAltWaningCrescent3 ,
            description: "Waning Crescent",
            color:"#a5abb1ff"
    }
}

export default moonIcons;