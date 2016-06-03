


function sliderToTextbox(ele){
    var value = parseFloat(ele.value).toFixed(2);
    var outputBox = ele.nextElementSibling;
    outputBox.value = value;
}

function textboxToSlider(ele){
    var value = parseFloat(ele.value).toFixed(2);
    var outputSlider = ele.previousElementSibling;
    outputSlider.value = value;
}

function generate(){
    var outputString = "";
    //video
    var brightness = document.getElementsByName("brightness-output")[0].value;
    
    outputString += "//Video Settings\n";
    outputString += 'mat_monitorgamma "'+brightness+'"';
    outputString += "\n\n";
    //audio
    var volume = document.getElementsByName("volume-output")[0].value;
    var voiceEnable = +document.getElementsByName("voice-enable-checkbox")[0].checked;
    var lobbyVoice = +document.getElementsByName("lobby-voice-enable-checkbox")[0].checked;
    var voiceScale = document.getElementsByName("voice-scale-output")[0].value;
    var musicVolume = document.getElementsByName("music-volume-output")[0].value;
    var backgroundAudio = +document.getElementsByName("background-audio-checkbox")[0].checked;
    var enhancedAudio = +document.getElementsByName("enhanced-audio-checkbox")[0].checked;
    outputString += "//Audio Settings\n";
    outputString += 'volume "'+volume+'"\n';
    outputString += 'voice_enable "'+voiceEnable+'"\n';
    outputString += 'voice_scale "'+voiceScale+'"\n';
    outputString += 'snd_musicvolume "'+musicVolume+'"\n';
    outputString += 'snd_mute_losefocus "'+backgroundAudio+'"\n';
    outputString += 'lobby_voice_chat_enabled "'+lobbyVoice+'"\n';
    outputString += 'dsp_enhance_stereo "'+enhancedAudio+'"\n';
    outputString += "\n\n";
    
    //mouse
    outputString += "//Mouse Settings\n";
    var sensitivity = document.getElementsByName("sensitivity-output")[0].value;
    var zoomSensivity = document.getElementsByName("zoom-sensivity-output")[0].value;
    var acceleration = document.getElementsByName("acceleration-output")[0].value;
    var rawInput = +document.getElementsByName("raw-input-checkbox")[0].checked;
    outputString += 'sensitivity "'+sensitivity+'"\n';
    outputString += 'zoom_sensitivity_ratio_mouse "'+zoomSensivity+'"\n';
    outputString += 'm_rawinput "'+rawInput+'"\n';
    outputString += 'm_customaccel "'+acceleration+'"\n';
    outputString += "\n\n";
    
    //HUD
    outputString += "//HUD Settings\n";
    var hudColorSelect = document.getElementsByName("hud-color-select")[0];
    var hudColor = hudColorSelect.options[hudColorSelect.selectedIndex].value;
    var teamColors = +document.querySelector('input[name="show-colors-radio"]:checked').checked;
    var personalColorSelect = document.getElementsByName("preferred-color-select")[0];
    var personalColor = personalColorSelect.options[personalColorSelect.selectedIndex].value;
    var showPlayerCount = +document.getElementsByName("player-count-checkbox")[0].checked;
    var playerCountPosition = +document.querySelector('input[name="player-count-pos-radio"]:checked').checked;
    var clanTags = +document.getElementsByName("clan-tag-checkbox")[0].checked;
    var bombLocation = +document.querySelector('input[name="show-bomb-radio"]:checked').value;
    var healthAmmoStyle = +document.querySelector('input[name="health-ammo-style-radio"]:checked').checked;
    outputString += 'cl_hud_color "'+hudColor+'"\n';
    outputString += 'cl_teammate_colors_show "'+teamColors+'"\n';
    outputString += 'cl_color "'+personalColor+'"\n';
    outputString += 'cl_hud_playercount_showcount "'+showPlayerCount+'"\n';
    outputString += 'cl_hud_playercount_pos "'+playerCountPosition+'"\n';
    outputString += 'cl_show_clan_in_death_notice "'+clanTags+'"\n';
    outputString += 'cl_hud_bomb_under_radar "'+bombLocation+'"\n';
    outputString += 'cl_hud_healthammo_style "'+healthAmmoStyle+'"\n';
    outputString += "\n\n";
    
    //Gameplay
    outputString += "//Gameplay Settings\n";
    var switchWeapons = +document.getElementsByName("switch-weapon-pickup-checkbox")[0].checked;
    var closeBuyMenu = +document.getElementsByName("close-buy-menu-checkbox")[0].checked;
    var leftHanded = +document.getElementsByName("left-hand-checkbox")[0].checked;
    var useKey = +document.getElementsByName("use-key-buy-menu-checkbox")[0].checked;
    
    outputString += 'cl_righthand "'+(leftHanded ? "0" : "1")+'"\n';
    outputString += 'cl_autowepswitch "'+switchWeapons+'"\n';
    outputString += 'cl_use_opens_buy_menu "'+useKey+'"\n';
    outputString += 'closeonbuy "'+closeBuyMenu+'"\n';
    outputString += "\n\n";
    
    //Rates
    outputString += "//Rates\n";
    var rate = document.getElementsByName("rate-output")[0].value;
    var cl_cmdrate = document.getElementsByName("cl_cmdrate-output")[0].value;
    var cl_updaterate = document.getElementsByName("cl_updaterate-output")[0].value;
    var cl_interp = document.getElementsByName("cl_interp-output")[0].value;
    var cl_interp_ratio = document.getElementsByName("cl_interp_ratio-output")[0].value;
    
    outputString += 'rate "'+rate+'"\n';
    outputString += 'cl_cmdrate "'+cl_cmdrate+'"\n';
    outputString += 'cl_updaterate "'+cl_updaterate+'"\n';
    outputString += 'cl_interp "'+cl_interp+'"\n';
    outputString += 'cl_interp_ratio "'+cl_interp_ratio+'"\n';
    outputString += "\n\n";
    
    //Radar
    outputString += "//Radar\n";
    var hudRadarScale = document.getElementsByName("hud-radar-output")[0].value;
    var radarMapScale = document.getElementsByName("radar-map-output")[0].value;
    var radarIconScale = document.getElementsByName("radar-icon-output")[0].value;
    var centerRadar = +document.getElementsByName("center-radar-checkbox")[0].checked;
    var rotateRadar = +document.getElementsByName("rotate-radar-checkbox")[0].checked;
    
    outputString += 'cl_hud_radar_scale "'+hudRadarScale+'"\n';
    outputString += 'cl_radar_scale "'+radarMapScale+'"\n';
    outputString += 'cl_radar_icon_scale_min "'+radarIconScale+'"\n';
    outputString += 'cl_radar_always_centered "'+centerRadar+'"\n';
    outputString += 'cl_radar_rotate "'+rotateRadar+'"\n';
    outputString += "\n\n";
    
    
    
    
    
    outputString += "host_writeconfig\n";
    outputString += 'echo "autoexec loaded successfully"';
    
    var output = document.getElementById("output");
    output.value = "";
    output.value = outputString;

    var inst = $('[data-remodal-id=modal]').remodal({
        closeOnConfirm: false
    });
    inst.open();
}


