/* ==================================================================
 * @FileTitle    포털 - 메인페이지 - 의사일정
 * @ModifyDate   2023.08.03
 * @Version      1.0
 * @Modifier     최용섭
 * @ChangeNote   최초작성
 * =================================================================*/


$( function() {
    naSchdlAction.init();
    naSchdlAction.naSchdlBindEvent();
});


/* 현재날짜(데이트 타입) */
var CONST_DATE = null;

/* 현재 날짜(검색시, 데이트타입은 월이 0으로 시작함) */
var CONST_SEARCH_DATE = {
    year: null, month: null, date: null
};

var WEEK = ['일', '월', '화', '수', '목', '금', '토'];

/**
 * 액션 함수 정의
 */
var naSchdlAction = function() {
    var self;
    return {
        init: function() {

            self = this;
            self.schlDivCdMap = new Object();
            
            var mobileYn = $(window).width() < 1200 ? true : false;
            if ( mobileYn ) {
                $(".Nacalendar #tab-schdl").css({"display":"none"});
            } else {
                $(".Nacalendar #tab-schdl").css({"display":"flex"});
            }
            
            
            // 날짜 초기화
            CONST_DATE = new Date();
            self.setConstSearchDate(CONST_DATE);
            
            // 스케쥴 구분코드 조회
            self.findSchlDivCode();
            
            // 스케쥴 조회(월 전체)
            self.search(CONST_SEARCH_DATE.year, CONST_SEARCH_DATE.month);
            
            // 스케쥴 상세 조회(일자별)
            var tabId = self.getTabId();
            var dateArr = new Array(3);
            dateArr[0] = CONST_SEARCH_DATE.year;
            dateArr[1] = CONST_SEARCH_DATE.month;
            dateArr[2] = CONST_SEARCH_DATE.date;
            
            self.outptCurrentDate( "agenda__meetYmd", dateArr );
            
            self.findAgendaSchl(tabId, dateArr);
            
            var currDate =  CONST_SEARCH_DATE.year + "-" + CONST_SEARCH_DATE.month + "-" + CONST_SEARCH_DATE.date;
            $("td[id^=calDate__]").removeClass("on");
            $("td[id^=calDate__"+currDate+"]").addClass("on");
            $("#agenda_calendar__body .on").find("a").attr("title", "선택일자");
        },
        // 이벤트
        naSchdlBindEvent : function() {

            $(window).resize(function (){
                var mobileYn = $(window).width() < 1200 ? true : false;
                if ( mobileYn ) {
                    $(".Nacalendar #tab-schdl").css({"display":"none"});
                } else {
                    $(".Nacalendar #tab-schdl").css({"display":"flex"});
                }
            });

            $("#goNaSchdl").on("click", function(event) {
                location.href = "/portal/na/agenda/agendaSchl.do?menuNo=600015";
            });
            
            // Tab 처리
            $("#tab-schdl-btn-sect ul li a").on("click", function(event) {
                var id = event.currentTarget.id;
                var dataNo = $("#" + id ).attr("data-no");

                var $tabAlink = $("#tab-schdl-btn-sect ul li a");
                $tabAlink.removeClass("on");
                $tabAlink.attr("title", "");
                
                var atag = $("#tab-schdl li:eq("+dataNo+") a");
                atag.addClass("on");
                atag.attr("title", atag.text() +" 선택됨");
                
                $("#tab-schdl-btn-sect .mobile_sub_tab a").text(atag.text());
                
                var dateArr = self.getChoiceDate();
                var tabId = self.getTabId();
                self.findAgendaSchl(tabId, dateArr);
            });
            
            // 달력에 날짜 클릭시...
            $("#agenda_calendar__body").on("click", "td[id^=calDate__]", function() {
                var date = $(this).attr("id").replace("calDate__", '');
                var dateArr = _.split(date, '-');
                
                self.outptCurrentDate( "agenda__meetYmd", dateArr );
                
                // 데이터가 있는경우만(날짜 스케쥴 조회)
                if ( com.util.str.isNotNull(date) && $(this).find("ul li").length > 0 ) {
                    var tabId = self.getTabId();
                    self.findAgendaSchl(tabId, dateArr);
                } else {
                    var $sect = $("#agendaSchl__list");
                    $sect.empty();
                    $sect.append( self.outptNoPlan( self.outptCurrentDate( "", dateArr ) ) );
                }
                
                var today = $("#agenda_calendar__body td.today").attr("id");
                $("td[id^=calDate__]").removeClass("on");
                $("td[id^=calDate__]").find("a").attr("title", "");
                if ( ! (today == "" || today == null || today == undefined) ) {
                    $("td[id="+today+"]").find("a").attr("title", "오늘일자");
                }
                $(this).addClass("on");
                $(this).find("a").attr("title", "선택일자");
            });
            
            // 이전 월
            $("#calendar__btn_prev").on("click", function() {
                var arrYm = $("#calendar__meetYM").text().split(".");
                CONST_DATE.setYear(arrYm[0].trim());
                CONST_DATE.setMonth(arrYm[1].trim());
                CONST_DATE.setMonth(CONST_DATE.getMonth() - 2);

                self.setConstSearchDate(CONST_DATE);
                self.search(CONST_SEARCH_DATE.year, CONST_SEARCH_DATE.month);
            });
            
            // 다음 월
            $("#calendar__btn_next").on("click", function() {
                alert('?');
                var arrYm = $("#calendar__meetYM").text().split(".");
                CONST_DATE.setYear(arrYm[0].trim());
                CONST_DATE.setMonth(arrYm[1].trim());
                CONST_DATE.setMonth(CONST_DATE.getMonth() );
                
                self.setConstSearchDate(CONST_DATE);
                self.search(CONST_SEARCH_DATE.year, CONST_SEARCH_DATE.month);
            });
        },
        // 스케쥴 구분코드 조회
        /* findSchlDivCode: function() {
            com.help.ajax({
                url: "/portal/na/naComm/findNahomeCode.json",
                params: {grpComCd: "SCHEDULE_DIV_CD"},
                done: function(res) {
                    self.schlDivCdMap = res.nahomeCode;
                    
                    _.forEach(self.schlDivCdMap, function(m, i) {
                        m["comNmPrefix"] = m.com1Val;
                    });
                }
            }); 
        },*/
        
        // 검색시 사용하는 날짜를 세팅한다
        setConstSearchDate: function(date) {
            CONST_SEARCH_DATE.year  = date.getFullYear();
            CONST_SEARCH_DATE.month = function() {
                var month = date.getMonth() + 1;
                return month < 10 ? com.util.str.lpad("0", 1) + month : month;
            }();
            CONST_SEARCH_DATE.date  = function() {
                var dt = date.getDate();
                return dt < 10 ? com.util.str.lpad("0", 1) + dt : dt;
            }();
        },
        // 검색(월 이전, 다음시)
        search: function(year, month) {
            $("#agenda_calendar__body").empty();
            
            // 캘린더 초기화
            com.help.makeCalendar("agenda_calendar__body", {
                year: year,
                month: month
            });
            
            $("#calendar__meetYM").text(year + ". " + month);
            
            // 만들어진 일자에 <a></a> tag를 추가함. focus 가 갈수 있도록함.
            var $calDate = $("td[id^=calDate__]");
            var len = $calDate.length;
            for ( var i = 0; i < len ; i++) {
                var html = $($calDate[i]).html();
                var idx = html.indexOf("<em");
                $($calDate[i]).html("<a href=\"javascript:;\">" + html + "</a>");
            }
            
            // 월 스케쥴 조회
            self.findSchlDay(year, month); 
        },
        // 월단위 스케쥴 조회
        findSchlDay: function(year, month) {
            var params = {
                meetYear: year,
                meetMonth: month
            }
            
            com.help.ajax({
                url: "/portal/na/agenda/findAgendaSchlDay.json",
                params: params,
                done: function(res) {
                    self.afterSchlDay(res);
                }
            });
        },
        // 월단위 스케쥴 조회 후처리
        afterSchlDay: function(res) {
            var data = res.agendaSchlDay;
            var $calendar = $("#agenda_calendar__body");
            
            if ( data.length > 0 ) {
                
                data = self.getDataGrouping(data);
                
                _.forEach(data, function(m, i) {
                    var meetDate = m.meettingDate;
                    var $ul = $calendar.find("td[id=calDate__"+ meetDate +"] ul");
                    
                    _.map(m, function(val, key) {
                        if ( key == "holdyTms" && val > 0 ) {
                            $("td[id=calDate__" +meetDate+ "]").find("em").css("color", "#f75338");         // 휴일로 마킹 처리
                        } else if ( key.lastIndexOf("Tms") > -1 && val > 0 ) {                             // 데이터값이 Tms로 끝남
                            var prefix = key.substring(0, key.lastIndexOf("Tms"));
                            var groupCd = self.getSchlDivCdGroupId(_.toUpper(prefix));
                            $ul.append("<li class=\"calenter_category_i_"+ _.toLower(groupCd) +"\" data-gubun=\""+ _.toUpper(groupCd) +"\"></li>");
                        }
                    });
                    
                });
            }
        },
        // main은 tab별로 그룹핑 되어 있기 때문에 Data 도 그룹핑 처리 함. 
        getDataGrouping: function(dataList) {
            
            var resultList = [];
            for ( var i = 0 ; i < dataList.length ; i ++ ) {
                var grpRow = {
                    "meettingDate" : dataList[ i ].meettingDate,
                    "assemTms"     : Number(dataList[ i ].assemTms) + Number(dataList[ i ].alcmtTms),
                    "cmmitTms"     : Number(dataList[ i ].cmmitTms) + Number(dataList[ i ].phcmtTms),
                    "speakTms"     : Number(dataList[ i ].speakTms) + Number(dataList[ i ].sbspkTms),
                    "naevtTms"     : Number(dataList[ i ].naevtTms),
                    "pressTms"     : Number(dataList[ i ].pressTms),
                    "holdyTms"     : Number(dataList[ i ].holdyTms)
                };
                
                resultList.push(grpRow);
            }
            
            return resultList;
        },
        // 스케쥴 구분코드명 GROUP ID 검색한다.
        getSchlDivCdGroupId: function(cd) {
            var rtnVal = "";
            _.forEach(self.schlDivCdMap, function(m, i) {
                if ( cd === m.comCd ) {
                    rtnVal = m.com3Val;
                }
            });
            return rtnVal;
        },
        
        // 스케쥴 상세조회(일자별)
        findAgendaSchl: function(gubun, arrDate) {

            var params = {
                  gubun     : gubun
                , meetYear  : arrDate[0]
                , meetMonth : arrDate[1].length==1?'0'+arrDate[1]:arrDate[1]
                , meetDate  : arrDate[2].length==1?'0'+arrDate[2]:arrDate[2]
            };
            
            com.help.ajax({
                url: "/portal/na/agenda/findAgendaSchl.json",
                params: params,
                done: function(res) {
                    self.afterAgendaSchl(res);
                }
            });
        },
        // 스케쥴 상세조회 후처리
        afterAgendaSchl: function(res) {

            var $sect = $("#agendaSchl__list");
            $sect.empty();
            
            res.choiceDate = res.choiceDate.replace('년','년 ').replace('월','월 ').replace('년 0','년 ').replace('월 0','월 ');
            
            // 선택된 일자 오른쪽에 출력
            if ( res.agendaSchl.length > 0 ) {

                var $itemList = $("<ul>");

                _.forEach(res.agendaSchl, function(m, i) {
                    var popTitle = "";
                    var cursorStyle = "";
                    if ( m.contsYn == "N" ) {
                        popTitle = "title=\"새창열림. " + m.title + "\"";
                        cursorStyle = "style=\"cursor:pointer;\"";
                    }
                    if ( m.gubun == "PRESS" ) {
                        popTitle    = "title=\"링크 없음. " + m.title + "\"";
                        cursorStyle = "style=\"cursor:default;\"";
                    }
                    
                    var groupCd = self.getSchlDivCdGroupId(m.gubun);
                    var $item = $("<li>"
                                 + "    <a href=\"javascript:void(0);\" " + cursorStyle + " " + popTitle + ">"
                                 + "        <dl>"
                                 + "            <dt><span class=\"calenter_category_i_"+ _.toLower(groupCd) +"\"></span>"+m.title+"</dt>"
                                 + "            <dd>"
                                 + "                <span class=\"time meetingTime\"></span>"
                                 + "                <span class=\"infoName\"></span>"
                                 + "        </dl>"
                                 + "    </a>"
                                 + "</li>");
                    
                    $item.attr("data-id", m.gubun);
                    var data = {
                            uniqId  : m.uniqId
                          , gubun   : m.gubun
                          , contsYn : m.contsYn
                          , linkUrl : m.linkUrl
                    };
                    $item.find("a").on("click", data, function(event) {
                        self.detail(event.data);
                    });
                    var meetDt = m.meettingTime;
                    $item.find(".meetingTime").html(meetDt);
                    $item.find(".infoName").html(m.infoName);

                    
                    $itemList.append( $item );
                });

                $sect.append( $itemList );
            }
            else { 
                var dateArr =  res.choiceDate.replace('년', '-').replace('월', '-').replace('일', '').split('-');
                $sect.append( self.outptNoPlan( self.outptCurrentDate( "", dateArr ) ) );
            }
            
            $sect.scrollTop(0);
        },
        // 선택된 Tab ID get
        getTabId : function () {
            var tabId = "";
            $("#tab-schdl li").each(function (idx) {
                
                if ( tabId != "" ) {
                    return;
                }
                
                var $tabAnchorTag = $(this).find("a");
                var clazz = $tabAnchorTag.attr("class");
                var id    = $tabAnchorTag.attr("id");
                
                if ( clazz == "on" ) {
                    tabId = id;
                    return;
                }
            });
            
            return tabId;
        },
        // 상세 보기
        detail: function(data) {
//             console.log("doAction.detail =========>");
//             console.log("uniqId :::" + data.uniqId);
//             console.log("gubun  :::" + data.gubun);
//             console.log("contsYn:::" + data.contsYn);
//             console.log("linkUrl:::" + data.linkUrl);
            
            if ( data.contsYn == "N" ) {
                if ( ! (data.linkUrl == null || data.linkUrl == "" || data.linkUrl == undefined) ) { 
                    gfn_openPopup({
                          url  : data.linkUrl
                        , name : "calendarLinkUrlPop"
                    });
                }
            } else {
                location.href = '/portal/na/agenda/agendaSchl.do?menuNo=600015&scheduleDivCd='+data.gubun+'&uniqId=' + data.uniqId;
            }
        },
        // 선택된 일자를 년,월,일 별 array를 return
        getChoiceDate:function() {
            var meetYmd = $("#agenda__meetYmd").text();
            meetYmd = meetYmd.substring( 0, _.indexOf(meetYmd, '(') - 1 );
            var dateArr = meetYmd.split('.');
            
            return dateArr;
        },
        // 현재일자/선택된 일자를 현재일자 출력 obj(objId)에 출력 처리
        outptCurrentDate : function(objId, arrDate) {
            
            if ( arrDate == null ) {
                return;
            }
            
            var dt = new Date();
            dt.setFullYear(arrDate[0]);
            dt.setMonth(Number(arrDate[1]) - 1);
            dt.setDate (Number(arrDate[2])    );
            
            var weekNm = WEEK[dt.getDay()];
            var strDate = arrDate[0] + "." + Number(arrDate[1]) + "." + Number(arrDate[2]) + " ("+ weekNm +")";
            
            if ( ! ( objId == '' || objId == null) ) {
                $("#" + objId ).text(strDate);
            }
            
            return strDate;
        },
        // 금일 일정 없슴.
        outptNoPlan : function(choiceDate) {
            var noPlanHtml = "<div class='agendaNoPlan'><span>금일 일정이 없습니다.</span></div>";
            /*
            var noPlanHtml = "<ul>"
                           + "    <li style=\"border-bottom:0px;\">"
                           + "        <dl><dt>"
                           + "            <dd><span>금일 일정이 없습니다.</span></dd>"
                           + "        </dt></dl>"
                           + "    </li>" 
                           + "</ul>";
             */
            return noPlanHtml; 
        },
        
        /**
         * site open
         */
        winOpenPopup : function(id, url) {

            if ( glnbInnerIpCheck() ) {
                alert("인터넷망에서 접속가능합니다.");
                return false;
            }

            var winid = window.open(url, id);
            if ( winid != null ) {
                winid.focus();
            }
        },
        /**
         * site open
         */
        winInnerOpenPopup : function(id, url) {

            var winid = window.open(url, id);
            if ( winid != null ) {
                winid.focus();
            }
        }
    }
}();

