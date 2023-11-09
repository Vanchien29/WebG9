var closeAdElement = document.getElementById('close-ad')
        closeAdElement.addEventListener('click', function() {
            var ttQuangCaoElement = document.getElementsByClassName("tt-quangcao")[0]
            ttQuangCaoElement.style.display = 'none'
        })