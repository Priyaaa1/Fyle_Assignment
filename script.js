$(document).ready(function() {
    // Step 1: Contact Us button functionality
    $('#contactUsBtn').click(function() {
        $('#contactFormModal').modal('show');
    });

    // Step 2: Form submission handling
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission
        const formData = $(this).serialize();
        $.post('https://getform.io/f/bgdyljea', formData)
            .done(function() {
                alert('Form submitted successfully!');
                $('#contactFormModal').modal('hide');
            })
            .fail(function() {
                alert('Error submitting form.');
            });
    });

    // Step 3: Initialize Slick Slider
    $('.what-we-do-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        customPaging: function(slider, i) {
            return '<button class="custom-dot"></button>';
        }
    });

    // Step 3: Hover effect for "What We Do" section
    $('.what-we-do-slider .slide').hover(function() {
        $(this).find('.image').hide();
        $(this).find('.hover-content').removeClass('d-none');
    }, function() {
        $(this).find('.hover-content').addClass('d-none');
        $(this).find('.image').show();
    });

    // Step 3: Read more button action
    $('.read-more').click(function() {
        window.open('https://fylehq.com', '_blank');
    });

    // Step 4: Change project image based on content click
    $('.project-item').click(function() {
        var newImage = $(this).data('image');
        $('#project-image').attr('src', newImage);
    });

    // Step 5: Highlight on hover
    $('.project-item').hover(function() {
        $(this).addClass('highlight');
    }, function() {
        $(this).removeClass('highlight');
    });
});
