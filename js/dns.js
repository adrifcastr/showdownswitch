//Javascript to manipulate SwitchBru DNS UI by pwsincd
//With gamepad support added by Ep8Script
//
//set variables
var gamepad = new Gamepad();
gamepad.init()
var targetDiv = document.getElementById('content');
var starting = true;
var cursor = false;
var htmlContent = '';
var selected;
var intro = '<div><p><h2>Welcome to SwitchBru DNS.</h2><p><br>Redirecting to <a id="google_link" href="https://www.google.com/webhp?nomo=1&hl=en" tabindex="-1" down="cancel" up="nav" left="outer-google">Google</a> in <span id="count">5</span> seconds. <div><input type="submit" class="selected" id="cancel" tabindex="-1" up="google_link" left="outer-google" value="Cancel Redirection" onclick="populateData(this.id)" /></div></div>';
targetDiv.innerHTML = intro;
//option specific html
function populateData(event){
	switch(event){
		case 'nav':{
			location.reload();
			break;
		}
		case 'one':{
			htmlContent = `<div class="google"><img class="google-rs" src="images/Google.png">
			<br><br>
			<form method="get" action="http://www.google.com/search">
			<div style="googlesearch">
			<input type="text" id="search-google" name="q" size="25" maxlength="255" value="" placeholder="Enter your search query..." tabindex="-1" up="nav" left="outer-google" down="google-button" /> <input type="submit" id="google-button" tabindex="-1" up="search-google" left="outer-google" value="Google Search" /><span class="select-next" selectnext="search-google"></span>
			</div>
			</form>
			</div>`;
			$(".title").html("Google");
			selected = "outer-google";
			break;
		}
		case 'two':{
			htmlContent = `<div class="google"><img class="webkit" src="images/webkit.png">
			<br><br>
			<form id="form" onsubmit="return false;">
			<div style="googlesearch">
			<input type="url" name="q" size="25" maxlength="255" id="url" value="" placeholder="Enter your URL..." tabindex="-1" up="nav" left="outer-url" down="load-page" />
			<input type="submit" id="load-page" value="Load Page" onclick="loadurl(url)" tabindex="-1" up="url" left="outer-urls" />
			</form><span class="select-next" selectnext="url"></span>
			</div>
			<br>
			Enter a URL above and hit "Load Page".
			</div>`;
			$(".title").html("Enter URL");
			selected = "outer-url";
			break;
		}
		case 'three':{
			htmlContent = `<div><h2><i class="far fa-question-circle"></i> SwitchBru DNS Server Feedback</h2><br>
			This is a survey to collect information on the usage of the SwitchBru DNS server (45.55.142.122).<br><br>
			We have made some design changes recently, and would like to better understand how people use the DNS service.<br><br>
			For usage information, please visit the <a id="visit-website" href="http://switchbru.com/dns/" tabindex="-1" up="nav" left="outer-survey" down="survey">SwitchBru DNS website</a>.<br><br>
			<form id="form" onsubmit="return survey()">
			<div style="googlesearch">
			<input type="submit" id="survey" value="Take our survey" onclick="survey()" tabindex="-1" up="visit-website" left="outer-survey"/>
			</form><span class="select-next" selectnext="survey"></span>`;
			selected = "outer-survey";
			$(".title").html("Usage Survey");
			break;
		}
		case 'four':{
			htmlContent = `<div class="youtube"><img class="ytimg" src="images/SwitchTube.png"><div>Thanks to Ep8Script on GBATemp, there is now a way to watch YouTube videos on your Switch! There is a thread about it <a href="https://gbatemp.net/threads/tool-website-for-watching-most-youtube-videos-on-the-switch.494796/" tabindex="-1">here</a>.<br><br>

<h3>Instructions</h3>
<font color="red">You cannot watch videos using the DNS trick.</font> Nintendo has blocked video playback in the wifi login applet.<br><br>

In order to watch videos, you must use the Share applet. To access this applet, do the following:<br>

<ol>
<li>Go to your Wifi settings and turn OFF this custom DNS server (this will prevent you from accessing this browser).</li>
<li>Go to the Switch's User settings, and try to link a Facebook account for social media. If you have already linked a Facebook account to this user, you must unlink it first.</li>
<li>A login page will come up, go to the bottom and click one of the links on the bottom to go to Facebook for real.</li>
<li class="skip"><i>You can now browse Facebook, but can't access external websites. That's okay.</i></li>
<li>On Facebook, search for "<b>SwitchBru</b>" to find our <a href="https://www.facebook.com/SwitchBru/" tabindex="-1">Facebook page</a> (you might have to sign in).</li>
<li>In the post at the top of the profile page, click the Google Sites URL for watching videos!</li>
<li>Search for a YouTube video you want to play, then click on the video and it should play.</li>
<li>If you want to go back to the rest of the internet, turn back on the custom DNS in Internet Settings.</li>
</ol>

<h3>How does it work?</h3>
The Switch has a whitelist of websites that it's allowed to visit in the Share applet. This is more restricted than the Login applet, but it's allowed to play videos. Google.com is one of those websites, so the Google Sites link allows the Switch to play a video that is located on the Facebook page.<br>
<br>
If you need help troubleshooting or setting it up you can post in the above GBATemp thread, contact us, or contact <a href="https://twtitter.com/Ep8Script" tabindex="-1">@Ep8Script</a> on Twitter.
<br><br>
<h3>Videos still won't play on the website</h3>
Make sure you are accessing the page <b>through the share applet</b> in User settings, when you go to link a Facebook account. You have to search for the post to click on the link for it to work. Doing it through this page using the DNS trick will result in the video not being able to play. <b>This is a technical limitation!</b> Blame Nintendo!<br><br>

Using our page isn't necessary, but you do need a way to get this link to the "Share" applet somehow: <a href="https://sites.google.com/site/ytnintendoswitch/" tabindex="-1">https://sites.google.com/site/ytnintendoswitch/</a>

<br><br><br></div>`;
			$(".title").html("YouTube");
			selected = "outer-yt";
			break;
		}
		case 'five':{
			htmlContent = `
			<h3>Switch-related</h3>
			<div class="flex">
				<div class="link" id="1" left="outer-links" down="4" right="2"><a href="https://realdekkia.github.io/switch-tetris/" tabindex="-1">Play Tetris</a></div>
				<div class="link" id="2" left="1" down="5" right="3"><a href="http://switchboard.cool/" tabindex="-1">Switchboard</a></div>
				<div class="link" id="3" left="2" down="6"><a href="http://fights.today/" tabindex="-1">fights.today</a></div>
				<div class="link" id="4" left="outer-links" up="1" right="5" down="7"><a href="https://www.wiiubru.com/2048/" tabindex="-1">2048</a></div> 
				<div class="link" id="5" left="4" up="2" right="6" down="8"><a href="https://quickdraw.withgoogle.com/" tabindex="-1">QuickDraw</a></div> 
				<div class="link" id="6" left="5" up="3" down="9"><a href="http://browserquest.mozilla.org/" tabindex="-1">BrowserQuest</a></div> 
				<div class="link" id="7" left="outer-links" up="4" down="10" right="8"><a href="https://www.google.com/logos/2010/pacman10-i.html" tabindex="-1">Pac-Man</a></div> 
				<div class="link" id="8" left="7" up="5" down="11" right="9"><a href="http://www.wiiubru.com/gp.html" tabindex="-1">Gamepad</a></div> 
				<div class="link" id="9" left="8" up="6" down="12"><a href="https://gbatemp.net/categories/nintendo-switch-discussions.282/" tabindex="-1">GBAtemp</a></div>
			</div>
			<br>
			If you have your own site that you'd like to add to this page, let us know!
			<br>
			<h3>Other Links</h3>
			<div class="flex">
				<div class="link" id="10" left="outer-links" up="7" right="11" down="13"><a href="https://reddit.com" tabindex="-1">Reddit</a></div>
				<div class="link" id="11" left="10" up="8" right="12" down="14"><a href="https://tumblr.com" tabindex="-1">Tumblr</a></div>
				<div class="link" id="12" left="11" up="9" down="15"><a href="https://twitter.com" tabindex="-1">Twitter</a></div>
				<div class="link" id="13" left="outer-links" up="10" right="14" down="16"><a href="https://wikipedia.org" tabindex="-1">Wikipedia</a></div>
				<div class="link" id="14" left="13" up="11" right="15" down="17"><a href="https://mail.google.com" tabindex="-1">GMail</a></div>
				<div class="link" id="15" left="14" up="12" down="18"><a href="https://facebook.com" tabindex="-1">Facebook</a></div>
				<div class="link" id="16" left="outer-links" up="13" right="17" down="19"><a href="https://amazon.com" tabindex="-1">Amazon</a></div> 
				<div class="link" id="17" left="16" up="14" right="18" down="20"><a href="https://www.pixiv.net" tabindex="-1">Pixiv</a></div> 
				<div class="link" id="18" left="17" up="15" down="21"><a href="https://closed.pizza" tabindex="-1">ClosedVerse</a></div> 
				<div class="link" id="19" left="outer-links" up="16" down="22"><a href="https://roblox.com" tabindex="-1">Roblox.com</a></div>
				<div class="link" id="20" left="19" up="17" right="21" down="23"><a href="https://minecraft.net" tabindex="-1">Minecraft.net</a></div>
				<div class="link" id="21" left="20" up="18" down="24"><a href="http://zeldadungeon.net" tabindex="-1">ZeldaDungeon</a></div>
				<div class="link" id="22" left="outer-links" up="19" right="23" down="25"><a href="https://youtube.com" tabindex="-1">YouTube</a></div>
				<div class="link" id="23" left="22" up="20" right="24" down="26"><a href="https://github.com" tabindex="-1">GitHub</a></div>
				<div class="link" id="24" left="23" up="21" down="27"><a href="https://deviantart" tabindex="-1">DeviantArt</a></div>
				<div class="link" id="25" left="outer-links" up="22" down="28"><a href="https://wattpad.com" tabindex="-1">WattPad</a></div>
				<div class="link" id="26" left="25" up="23" right="27" down="29"><a href="https://gdax.com" tabindex="-1">GDAX</a></div>
				<div class="link" id="27" left="26" up="24" down="30"><a href="https://instagram.com" tabindex="-1">Instagram</a></div>
				<div class="link" id="28" left="outer-links" up="25" right="29"><a href="https://duckduckgo.com" tabindex="-1">DuckDuckGo</a></div>
				<div class="link" id="29" left="28" up="26" right="30"><a href="https://yahoo.com" tabindex="-1">Yahoo</a></div>
				<div class="link" id="30" left="29" up="27"><a href="https://bing.com" tabindex="-1">Bing</a></div>
			</div><span class="select-next" selectnext="1"></span><br>
			`;
			$(".title").html("Useful Links");
			selected = "outer-links";
			break;
		}
		case 'cancel':{
			htmlContent = `<div>
			<p><h2>Welcome to SwitchBru DNS.</h2><p>
			<br>Redirection to Google cancelled. Welcome to our DNS server. 
			<div><input class="selected" type="submit" id="cancel-search" value="Continue to Google"tabindex="-1"  onclick="google()" tabindex="-1" down="discord-link" left="outer-google" up="nav"/>
			</div><span up="cancel-search" left="outer-google" down="discord-link"></span>
			<br>
			Find us at:<br><br><a href="https://discord.gg/y2ASN3K" id="discord-link" tabindex="-1" up="cancel-search" left="outer-links" right="irccloud"><i class="fab fa-discord"></i>   https://discord.gg/y2ASN3K</a>
			<span>  and  </span>
			<a href="https://www.irccloud.com/irc/freenode:2/channel/switchbru" id="irccloud" tabindex="-1" up="cancel-search" left="discord-link"><i class="far fa-comments"></i>   IRCCLOUD</a>
			</div>`;
			selected = "outer-google";
			break;
		}
		case 'about':{
			htmlContent = `<h2>About SwitchBru DNS server</h2>
			This service is provided free of charge with no warranty whatsoever. The service does not store or retain any personal data. Besides providing the Google redirect for the Nintendo Switch, all DNS queries are handled via <a href="https://developers.google.com/speed/public-dns/" tabindex="-1" id="google-dns" up="nav" left="outer-about" down="faq">Google DNS</a>.
<br><br>
We are hosting this service as we believe that those of us that purchased an Internet-capable Switch should have the right to browse the web! We hope that one day Nintendo adds an official web browser to the console.
<br><br>
This server <b>does not currently block firmware updates</b>. If you are looking to block updates, you should use <a href="https://reswitched.tech/info/faq" tabindex="-1" id="faq" up="google-dns" left="outer-about">ReSwitched DNS</a>, or stay offline.<span class="select-next" selectnext="google-dns"></span>`;
			$(".title").html("About");
			selected = "outer-about";
			break;
		}
	}
	targetDiv.innerHTML = htmlContent;
	var myDiv = document.getElementById('content');
	myDiv.scrollTop = 0;
	$(".next").attr("up", selected).attr("down", selected).attr("left", selected).attr("right", selected);
	//sidebar highlighting
	if(event !== "cancel" || event !== "about") {
		$('.inner').removeClass('inner-active');
		$(event).addClass('inner-active');
	}
};
// time function
function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	m = checkTime(m);
	document.getElementById('time').innerHTML = h + ":" + m;
	t = setTimeout(function() {
		startTime()
	}, 500);
}
startTime();	
// redirection countdown
window.onload = function(){
	(function(){
		var counter = 5;
		setInterval(function() {
			counter--;
			if (counter >= 0 && ("#count").length) {
				$("#count").html(counter);
			}
			if (counter === 5) {
				clearInterval(counter);
				//window.location.href = "https://www.google.com/webhp?nomo=1&hl=en";
			}   
		}, 1000);
	})();

}

gamepad.bind(Gamepad.Event.TICK, function (gamepads) {
	if($("body").is(":hover")) {
		cursor = true;
	}
	if(cursor) {
		$(".next").addClass("selected");
	}
});

gamepad.bind(Gamepad.Event.BUTTON_DOWN, function (e) {
	$(".spanbuttons").append(e.control);
    switch (e.control) {
		case "DPAD_UP":
			UP();
			break;
        case "DPAD_LEFT":
            LEFT();
            break;
        case "DPAD_RIGHT":
            RIGHT();
            break;
        case "DPAD_DOWN":
            DOWN();
            break;
        case "FACE_2":
			if(cursor) {
			}
			else if($(".selected.outer").length) {
				$(".selected").removeClass("selected");
				$("#"+$(".select-next").attr("selectnext")).addClass("selected");
			}
			else if($("input[type=text].selected, input[type=url].selected").length) {
				$(".selected").focus();
			}
			else if($("#nav.selected").length) {
				location.reload();
			}
			else if($(".selected.link").length) {
				window.location.href = $(".selected a").attr("href");
			}
			else {
				$(".selected").click();
			}
            break;
		case "FACE_4":
			location.reload();
			break;
    }
	cursor = false;
});

var lastTime = 0;

gamepad.bind(Gamepad.Event.AXIS_CHANGED, function (e) {
	var now = new Date().getTime();
	if (now - lastTime > 200 && !cursor) {
		switch (e.axis) {
			case "LEFT_STICK_X":
			case "RIGHT_STICK_X":
				if (e.value < -0.5) {
					LEFT();
					lastTime = now;
				} else if (e.value > 0.5) {
					RIGHT();
					lastTime = now;
				}
				break;
			case "LEFT_STICK_Y":
			case "RIGHT_STICK_Y":
				if (e.value > 0.5) {
					DOWN();
					lastTime = now;
				} else if (e.value < -0.5) {
					UP();
					lastTime = now;
				}
				break;
		}
	}
});

$('body').on('click', '.menu', function(){
	$("#content").focus();
	$(".selected").removeClass("selected");
	$(".next").addClass("selected");
});

//link specific functions
function google() {
	window.location.href = "https://www.google.com/webhp?nomo=1&hl=en";
}
function loadurl() {
	var input = document.getElementById("url").value;
	
	// add an http:// to the front if it's not present
	if (input == "")
		if (!input.toLowerCase().startsWith("http://") && !input.toLowerCase().startsWith("https://"))
			input = "http://" + input;
		window.location.href = input;
}
function survey() {
	window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSewt6insjUEzg0dWV--n5OlDodk2Zflr3pbd4XWs6hEuZTzNg/viewform";
}

function removeSelect() {
	$(".selected").removeClass("selected");
	cursor = true;
}

function UP() {
	if($(".selected").attr("up")) {
		$(".selected").removeClass("selected").addClass("prevselected");
		$("#"+$(".prevselected").attr("up")).addClass("selected");
		$(".prevselected").removeClass("prevselected");
		if($(".selected.outer").length) {
			populateData($(".selected .inner").attr("id"));
		}
	}
	var sID = $(".selected").attr("id");
	if(sID == "7" || sID == "8" || sID == "9" ) {
		$("#content").animate({
			scrollTop:  $("#content").scrollTop() - $("#content").offset().top + $("#content h3:first-of-type").offset().top 
		}, 1000); 
	}
}

function LEFT() {
	if($(".selected").attr("left")) {
		$(".selected").removeClass("selected").addClass("prevselected");
		$("#"+$(".prevselected").attr("left")).addClass("selected");
		$(".prevselected").removeClass("prevselected");
		if($(".selected.outer").length && starting == true) {
			populateData($(".selected .inner").attr("id"));
			starting = false;
		}
	}
	if($("#outer-links.selected").length) {
		$("#content").animate({
			scrollTop: 0
		}, 500);
	}
}

function RIGHT() {
	if($(".selected").attr("right")) {
		$(".selected").removeClass("selected").addClass("prevselected");
		$("#"+$(".prevselected").attr("right")).addClass("selected");
		$(".prevselected").removeClass("prevselected");
	}
	else if($(".selected.outer").length) {
		$(".selected").removeClass("selected");
		$("#"+$(".select-next").attr("selectnext")).addClass("selected");
	}
}

function DOWN() {
	if($(".selected").attr("down")) {
		$(".selected").removeClass("selected").addClass("prevselected");
		$("#"+$(".prevselected").attr("down")).addClass("selected");
		$(".prevselected").removeClass("prevselected");
		if($(".selected.outer").length) {
			populateData($(".selected .inner").attr("id"));
		}
	}
	var sID = $(".selected").attr("id");
	if(sID == "10" || sID == "11" || sID == "12" ) {
		$("#content").animate({
			scrollTop:  $("#content").scrollTop() - $("#content").offset().top + $("#content h3:last-of-type").offset().top 
		}, 1000); 
	}
}