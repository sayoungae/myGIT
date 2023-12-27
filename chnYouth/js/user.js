$(document).ready(function(){
    //약관동의 내용보기
    $('.terms_btn').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            $('.terms_pop').show().find('.bott_btn >button').focus();
        }
    });
    $('#terms_btn02').on('click keydown', function(e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.key === 'Enter')) {
            $('.popup_content .top_cont h5').html("개인정보 수집 및 이용에 관한 동의");
            $('.popup_content .terms_desc').html(
                "<div><p>1. 개인정보의 수집·이용 목적</p>충남청년포털 홈페이지는 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.<p>&lt;홈페이지 회원가입 및 관리&gt;</p>제한적 본인확인제 시행에 따른 본인확인, 각종 고지·통지, 고충처리, 분쟁 조정을 위한 기록 보존 등을 목적으로 개인정보를 처리합니다.<p>&lt;민원사무 처리&gt;</p>민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.</div><div>2. 수집하려는 개인정보의 항목<p>&lt;홈페이지 회원가입정보&gt;</p>이메일, 연락처, 비밀번호, ID, 이름, 성별, 서비스 이용 기록, 접속 로그, CI 등<p>&lt;민원사무 처리정보 개인정보 항목&gt;</p>이메일, 연락처, 비밀번호, ID, 이름, 성별, 서비스 이용 기록, 접속 로그 등</div><div>3. 개인정보의 보유 및 이용 기간<p>&lt;홈페이지 회원가입 및 관리&gt;</p>관련 개인정보는 회원가입 약관 등 동의일로부터<회원 탈퇴시까지>까지 위 이용목적을 위하여 보유·이용됩니다.(보유근거 : 이용약관 및 정보주체의 동의)<p>&lt;민원사무 처리정보 개인정보 항목&gt;</p>관련 개인정보는 수집.이용에 관한 동의일로부터&lt;3년&gt;까지 위 이용목적을 위하여 보유·이용됩니다.(보유근거 : 이용약관 및 정보주체의 동의)<p>&lt;관련 기록 등&gt;</p>신용정보의 수집/처리 및 이용 등에 관한 기록, 소비자의 불만 또는 분쟁처리에 관한 기록</div><div>4. 이용자는 본 동의를 거부할 권리가 있습니다. 동의를 거부할 경우에는 서비스 이용이 제한됨을 알려드립니다.</div>"
            );
        }
    });
    // 체크박스 전체 선택
    $(".fRegister").on("click", "#agreeAll", function () {
        $(this).parents(".fRegister").find('input').prop("checked", $(this).is(":checked"));
    });

    // 체크박스 개별 선택
    $(".fRegister").on("click", ".agree", function() {
        var is_checked = true;

        $(".fRegister .agree").each(function(){
            is_checked = is_checked && $(this).is(":checked");
        });

        $("#agreeAll").prop("checked", is_checked);
    });
    
    // 회원가입 form
    $("input.enum").keyup(function(event){
        if (!(event.keyCode >=37 && event.keyCode<=40)) {
         var inputVal = $(this).val();
         $(this).val(inputVal.replace(/[^a-z0-9]/gi,''));
        }
    });
    $("input.numOny").keyup(function(event){
        if (!(event.keyCode >=37 && event.keyCode<=40)) {
         var inputVal = $(this).val();
         $(this).val(inputVal.replace(/[^0-9]/g,''));
        }
    });



})