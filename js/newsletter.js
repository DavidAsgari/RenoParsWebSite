/*----------------------------------
//---- NEWSLETTER SUBSCRIPTION ----//
-----------------------------------*/
(function () {
    $('.mailchimp').ajaxChimp({
        callback: mailchimpCallback,
        //replace bellow url with your own mailchimp form post url inside the url: "---".
        //to learn how to get your own URL, please check documentation file.
        url: "https://facebook.us12.list-manage.com/subscribe/post?u=deef3c26dc0cf6b62354d19bf&amp;id=e3b98d8bd0"
    });

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('.subscription-success').html('<i class="fa fa-check"></i>' + resp.msg).fadeIn(1000);
            $('.subscription-error').fadeOut(500);

        } else if (resp.result === 'error') {
            $('.subscription-error').html('<i class="fa fa-times"></i>' + resp.msg).fadeIn(1000);
        }
    }
}());
