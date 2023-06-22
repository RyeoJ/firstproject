id = prompt("아이디 입력");

if( id == "admin")
{
    password = prompt("비밀번호입력")
    if(password == "123456")
    {
        location.href = "0616_2_ok.html"
    }
    else
    {
        location.href = "0616_2_fail.html"
    }
}
else
{
    location.href = "0616_2_fail.html"
}