document.addEventListener("DOMContentLoaded", async () => {
    
  /* Prompts
  ===================================================================== */
    // find if we have any tabs
    if ($('.tab-content').length) {

        //priority 1 : set active tab according to url
        var url = window.location.hash;
        var activeTab = url.substring(url.indexOf(".#") + 1);

        if ( $('[data-bs-target="#'+activeTab+'"]').length) {
            $('[data-bs-target="#'+activeTab+'"]').tab('show');
        }

        // priority 2 : keep activ tab according to local storage value
        else {
            $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
                localStorage.setItem('lastTab', $(this).attr('data-bs-target'));
            });
            var lastTab = localStorage.getItem('lastTab');
            if (lastTab) {
                $('[data-bs-target="' + lastTab + '"]').tab('show');
            }
        }
    }
});