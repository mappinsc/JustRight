var pageTitle = $(document).find("title").text();

function trackLinks(link, e){
	if($(e.target).prop("tagName") == 'IMG'){
		ga('send', 'event', 'MC PAGE='+pageTitle, 'TAG='+$(e.target).prop("tagName")+' | LINK='+link.attr('href'), 'TITLE='+link.attr('trackingLabel')+' | LABEL='+$(e.target).attr('alt'));
	}else{
		ga('send', 'event', 'MC PAGE='+pageTitle, 'TAG='+$(e.target).prop("tagName")+' | LINK='+link.attr('href'), 'TITLE='+link.attr('trackingLabel')+' | LABEL='+link.text());
	}
	
}

//event tracking for dropdown links
$('.drop-list-links').on('change', function(e){
	if(e.target.value != ''){
		ga('send', 'event', 'MC PAGE='+pageTitle, 'TAG='+$(e.target).prop("tagName")+' | LINK='+e.target.value, 'TITLE='+$(this).attr('trackingLabel')+' | LABEL='+$(e.target).find('option:selected').text());
		window.location = e.target.value;
	}
});

//event tracking for link clicks
$('a').on('click', function(e){
	trackLinks($(this), e);
});

