function appear(){
	sitesdiv = document.getElementById("sites");
	sitesdiv.style.display="block";
	searchdiv = document.getElementById("search");
	searchdiv.style.display="block";
	
	//only do for page 0 because other pages are hidden by default
	for(var i=0;i<sitesdiv.childNodes[0].childNodes.length;i++){
		sitesdiv.childNodes[0].childNodes[i].style.display="inline-block";
	};
}

var config =
{
    "sites":
    [
        { "url": "http://gmail.com/",                                "text": "GM" },
        { "url": "http://youtube.com/",                              "text": "YT"  },
        { "url": "http://boards.4chan.org/g/",                       "text": "/g/"   },
        { "url": "http://boards.4chan.org/b/",                       "text": "/b/"  },
        { "url": "http://reddit.com/",                         		 "text": "RDT"  },
        { "url": "http://thepiratebay.se/",                           "text": "TPB" },
        { "url": "http://bitsoup.org/",    					       	 "text": "BS"  },
		{ "url": "http://subscene.com/",                           "text": "SS"   },
        { "url": "http://facebook.com/",                         	"text": "FB"   },
        { "url": "http://deviantart.com",                           "text": "DA"  },
        { "url": "http://pandora.com/",                          "text": "PD" },
        { "url": "http://engadget.com/",                          "text": "EN"   }
    ],
    "search":
    {
        "url"  : "http://www.google.com/search",
        "name" : "Search...",
        "query": "q"
    }
}, d = document;

d.addEventListener("DOMContentLoaded", function()
{
    d.removeEventListener("DOMContentLoaded", arguments.callee, false);

    for (var i = 0, MAX = config.sites.length; i < MAX; ++i)
    {
        var p = i / 12, //used for navigation
        site = d.createElement("a");
        site.href = config.sites[i].url;
        site.textContent = config.sites[i].text;

		//navigation stuff
        if (i % 12 === 0)
        {
            var page = d.createElement("div");
            page.id = "page" + p;

            d.querySelector("#sites").appendChild(page);
            d.querySelector("#navigation ul").appendChild((d.createElement("li")));

            if (p === 0)
            {
                d.querySelector("#navigation ul li").classList.add("selected");
                d.querySelector("#sites > div").classList.add("selected");
            }
        }

        d.querySelector("#page" + Math.floor(p)).appendChild(site);
    }

    var form = d.querySelector("#search form"), text = form.querySelector("input");
    form.action      = config.search.url;
    text.name        = config.search.query;
    text.placeholder = config.search.name;
});
