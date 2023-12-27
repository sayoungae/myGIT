
document.addEventListener('DOMContentLoaded', function() {
    // 오늘 날짜 구하기
    var today = new Date();
    // var dayOfW = ['일', '월', '화', '수', '목', '금', '토'];

    var calendarEl = document.getElementById('calendar');
    var listDayEl = document.getElementById('list_day');
    var clickedEvents = []; // 클릭한 이벤트를 저장할 배열

    var calendar = new FullCalendar.Calendar(calendarEl, {
        // contentHeight: 752,
        locale:'ko',
        initialView: 'dayGridMonth',
        titleFormat : 'YYYY . MM',
        headerToolbar: {
            left: 'prev',
            center: 'title',
            right: 'next'
        },
        dayMaxEvents: 5,

        // classNames: event_tp1 일자리,event_tp2 주거복지,event_tp3 영농정착,event_tp4 문화활동
        events: [
            {
                title: '청년 스타트업 기업육성 콘텐츠 기업 육성신터 조성',
                start: '2023-09-04',
                end: '2023-09-26',
                classNames: 'event_tp1'
            },
            {
                title: '농업계고졸업 청년농업인 농창업지원',
                start: '2023-09-04',
                end: '2023-09-07',
                classNames: 'event_tp2'
            },
            {
                title: '힘쎈 충남과 함께 성장하는 지역특화 일자리 지원사업',
                start: '2023-09-12',
                end: '2023-09-18',
                classNames: 'event_tp3'
            },
            {
                title: '보호아동종료 자립지원 체계구축',
                start: '2023-09-27',
                end: '2023-09-30',
                classNames: 'event_tp4'
            },
            {
                title: '보호아동종료 자립지원 체계구축',
                start: '2023-09-24',
                end: '2023-09-26',
                classNames: 'event_tp4'
            },
            {
                title: '보호아동종료 자립지원 체계구축',
                start: '2023-09-24',
                end: '2023-09-26',
                classNames: 'event_tp1'
            },
            {
                title: '보호아동종료 자립지원 체계구축',
                start: '2023-09-24',
                end: '2023-09-26',
                classNames: 'event_tp2'
            },
            {
                title: '보호아동종료 자립지원 체계구축',
                start: '2023-09-24',
                end: '2023-09-25',
                classNames: 'event_tp3'
            },
            {
                title: '보호아동종료 자립지원 체계구축',
                start: '2023-10-02',
                end: '2023-10-05',
                classNames: 'event_tp4'
            },
            {
                title: '보호아동종료 자립지원 체계구축',
                start: '2023-10-02',
                end: '2023-10-05',
                classNames: 'event_tp1'
            },
            {
                title: '보호아동종료 자립지원 체계구축',
                start: '2023-10-02',
                end: '2023-10-08',
                classNames: 'event_tp2'
            },
        ],
       /* dateClick: function(info) {
            var arrCal = calendar.getEvents();

            // 클릭한 날짜로 텍스트 변경
            
            var formattedClickedDate = clickedDate.getFullYear() + '. ' +
                ('0' + (clickedDate.getMonth() + 1)).slice(-2) + '. ' +
                ('0' + clickedDate.getDate()).slice(-2) + ' (' +
                dayOfW[clickedDate.getDay()] + ')';
            
            $('#list_day h4').text(formattedClickedDate);
            
            // 이벤트 데이터 list_day
            var listDay = document.querySelectorAll('#list_day ul > li');
        
            for(i=0; i < listDay.length; i++){
                var eventTit = arrCal[i].title;
                var eventStart = arrCal[i].start.getFullYear() + '-' +
                ('0' + (arrCal[i].start.getMonth() + 1)).slice(-2) + '-' +
                ('0' + arrCal[i].start.getDate()).slice(-2);

                // end 는 표기날짜보다 dd + 1 기재하기 때문에 아래 방식으로.
                var eventEnd = arrCal[i].end.toISOString().substring(0, 10);

                var eventTitle = listDay[i].querySelector('.event_titl');
                var eventschdl = listDay[i].querySelector('.schdl');
                eventTitle.textContent = arrCal[i].title;
                eventschdl.textContent = `${eventStart} ~ ${eventEnd}`;
            }
        },*/
    });
    
    calendar.render();

    // 월선택 아이콘, 팝업 추가
    var headerToolbar = $('.fc-header-toolbar');
    headerToolbar.append('<div class="year_cho"><button type="button" title="월 선택"><span>월 선택</span></button></div>');
    $('.year_cho').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            if(!$(this).hasClass('active')){
                $(this).addClass('active');
                $('.year_cho_list').show().focus();
            }
        }
    });

    // 달력 year, month 변경
    // 초기 날짜, 년도, 월 설정
    var currentDate = new Date();
    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth();

    var yearBtnPrev = document.querySelector('.year_cho_list .year_prev');
    var yearBtnNext = document.querySelector('.year_cho_list .year_next');

    // 다음 버튼 클릭 이벤트 핸들러
    var yearBtnNext = document.querySelector('.year_cho_list .year_next');
    yearBtnNext.addEventListener('click', function() {
        currentYear++;
        document.querySelector('.year_cho_list .year_txt').textContent = currentYear.toString();
        calendar.gotoDate(new Date(currentYear, currentMonth, 1));
    });

    // 이전 버튼 클릭 이벤트 핸들러
    var yearBtnPrev = document.querySelector('.year_cho_list .year_prev');
    yearBtnPrev.addEventListener('click', function() {
        currentYear--;
        document.querySelector('.year_cho_list .year_txt').textContent = currentYear.toString();
        calendar.gotoDate(new Date(currentYear, currentMonth, 1));
    });

    function monthBtnClick(button) {
        var monthValue = parseInt(button.getAttribute('title'));
        if (!isNaN(monthValue) && monthValue >= 1 && monthValue <= 12) {
            // monthValue가 유효한 월 값(1~12)이면 해당 월로 이동
            calendar.gotoDate(new Date(currentYear, monthValue - 1, 1));

            // .year_cho_list 요소를 숨김
            $('.year_cho').removeClass('active');
            $('.year_cho_list').hide();
        }
    }

    // month 버튼 이벤트 핸들러
    var buttonElements = document.querySelectorAll('.year_cho_list ul li button');
    buttonElements.forEach(function(button) {
        button.addEventListener('click', function() {
            monthBtnClick(button);
            $('.year_cho_list ul li button').removeClass('on');
            $(button).addClass('on');
        });
    });

    // list_day
    var currentDate = new Date();
    var dayOfW = ['일', '월', '화', '수', '목', '금', '토'];

    // #list_day h4의 데이터 업데이트 함수
    function updateListDayHeader() {
        // 현재 날짜를 'YYYY. MM. DD (dayofW)' 형식으로 변환
        var formattedDate = currentDate.getFullYear() + '. ' +
            ('0' + (currentDate.getMonth() + 1)).slice(-2) + '. ' +
            ('0' + currentDate.getDate()).slice(-2) + ' (' +
            dayOfW[currentDate.getDay()] + ')';

        // #list_day h4에 날짜 업데이트
        $('#list_day h4').html(' ' + formattedDate);
    }

    // 초기 #list_day h4 업데이트
    updateListDayHeader();

    // 이전 버튼 클릭 이벤트 핸들러
    var listDayBtnPrev = document.querySelector('.list_day_prev');
    listDayBtnPrev.addEventListener('click', function() {
        currentDate.setDate(currentDate.getDate() - 1);
        // #list_day h4 업데이트
        updateListDayHeader();
    });

    // 다음 버튼 클릭 이벤트 핸들러
    var listDayBtnNext = document.querySelector('.list_day_next');
    listDayBtnNext.addEventListener('click', function() {
        currentDate.setDate(currentDate.getDate() + 1);
        // #list_day h4 업데이트
        updateListDayHeader();
    });

    // FullCalendar dateClick 이벤트 핸들러
    /*
    calendar.setOption('dateClick', function(info) {
        var $this = $(this);
        var clickedDate = info.date;
        var arrCal = calendar.getEvents();

        // 클릭한 날짜로 텍스트 변경
        var formattedClickedDate = clickedDate.getFullYear() + '. ' +
            ('0' + (clickedDate.getMonth() + 1)).slice(-2) + '. ' +
            ('0' + clickedDate.getDate()).slice(-2) + ' (' +
            dayOfW[clickedDate.getDay()] + ')';

        // #list_day h4 업데이트
        currentDate = clickedDate; // 클릭한 날짜로 기준을 변경
        updateListDayHeader();

        // 이벤트 데이터 list_day 업데이트
        var listDay = document.querySelectorAll('#list_day ul > li');

        for(i=0; i < listDay.length; i++){
            var eventTit = arrCal[i].title;
            var eventStart = arrCal[i].start.getFullYear() + '-' +
                ('0' + (arrCal[i].start.getMonth() + 1)).slice(-2) + '-' +
                ('0' + arrCal[i].start.getDate()).slice(-2);

            // end 는 표기날짜보다 dd + 1 기재하기 때문에 아래 방식으로.
            var eventEnd = arrCal[i].end.toISOString().substring(0, 10);

            var eventTitle = listDay[i].querySelector('.event_titl');
            var eventschdl = listDay[i].querySelector('.schdl');
            eventTitle.textContent = arrCal[i].title;
            eventschdl.textContent = `${eventStart} ~ ${eventEnd}`;
        }
    });
 */

// windwo.resize
    function handleEventTitles() {
        var ww = window.innerWidth;
        $('.fc-event').each(function() {
            if (!$(this).hasClass('fc-event-start')) {
                $(this).find('.fc-event-title').addClass('blind');
            }

            if (ww <= 760) {
                // 윈도우 너비가 760px 이하인 경우 텍스트 숨기기
                $(this).find('.fc-event-title').hide();
            } else {
                $('.fc-event-title').show();
            }

        });
    };

    // 페이지 로드 시 초기화
    handleEventTitles();
    $(window).resize(function() {
        // 창 크기가 변경될 때마다 이벤트 타이틀 지우기
        handleEventTitles();
    });

});



