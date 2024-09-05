$(document).ready(function() {
    // Text to display (contact info)
    var contactText = "Email: rhear574@gmail.com\nPhone: (678)-832-7289\nLocation: Marietta, GA";
    var objectiveText = "Ambitious computer science and chemistry enthusiast with the desire to\nbuild, innovate, and help grow, not just the next generation\nbut to ensure a bright future for the world in every aspect.";
    var workText = "White Tiger Martial Arts\nI teach young kids, teenagers, and adults the basics of Taekwondo, Nunchucks, Bowstaffs, \nforms, and kicking, and many more techniques. I participate and lead demonstration(demo) performances during belt ceremonies and also outside of the studio, for example, the East Cobb Parade\nAlso, I help out with any technological problems going on in the studio.\n For 4+ years and continuing,in the Leadership Academy. ";
    var skillsText = "Strong Communicator/Collaborator\nStrong Work Ethic\nDigital Literacy\nGood Workflow Optimization";
    var educationText = "Pope High School\nAugust 2021-Present";
    var awardsText = "Microsoft IT Software Development Certification, Grade 11\nNCWITT Female Aspirations in Computing, Grade 11\n Academic Letter Award 2021-2022";
    var hobbiesText = "Reading\nBaking/Cooking\nSudoku\nTaekwondo\nBiking";
    var activitiesText = "Aug 2024 - Present | Chem Club | Grade 12\nAug 2023 - Present | National Honors Society | Grades 11-12\n Aug 2021 - Present | Habitat for Humanity | Grade 9-12\nAug 2023 - Present | Computing Club | Grade 11-12\nAug 2023 - Present | Mu Alpha Theta | Grade 11-12";

    // Function to simulate typing effect
    function typeText(element, text, delay) {
        let i = 0;
        function type() 
        {
            if (i < text.length) {
                element.append(text.charAt(i) === '\n' ? '<br>' : text.charAt(i)); // Add character or line break
                i++;
                setTimeout(type, delay);
            }
        }
        type();
    }

    // When 'Contact Information' is hovered over
    $('#contact-heading').hover(function() 
    {
        $(this).css('cursor', 'pointer'); // Change cursor to pointer on hover
    });

    // When 'Contact Information' is clicked
    $('#contact-heading').click(function() 
    {
        let contactInfo = $('#contact-info');
        if (contactInfo.is(':hidden')) 
        {
            contactInfo.empty().show(); // Clear previous text and show the paragraph
            typeText(contactInfo, contactText, 50); // Call the typewriter function with a delay of 50ms
        } 
        else 
        {
            contactInfo.hide(); // Hides the contact info if clicked again
        }
    });
    
    // When 'Education' is hovered over
    $('#education-heading').hover(function() 
    {
        $(this).css('cursor', 'pointer'); // Change cursor to pointer on hover
    });

    // When 'Education' is clicked
    $('#education-heading').click(function() 
    {
        let educationInfo = $('#education-info');
        if (educationInfo.is(':hidden')) 
        {
            educationInfo.empty().show(); // Clear previous text and show the paragraph
            typeText(educationInfo, educationText, 50); // Call the typewriter function with a delay of 50ms
        } 
        else 
        {
            educationInfo.hide(); // Hides the education info if clicked again
        }
    });

    // When 'Objective' is hovered over
    $('#objective-heading').hover(function() 
    {
        $(this).css('cursor', 'pointer'); // Change cursor to pointer on hover
    });
    
    $('#objective-heading').click(function() 
    {
        let objectiveInfo = $('#objective-info');
        if (objectiveInfo.is(':hidden')) 
        {
            objectiveInfo.empty().show(); // Clear previous text and show the paragraph
            typeText(objectiveInfo, objectiveText, 50); // Call the typewriter function with a delay of 50ms
        } 
        else 
        {
            objectiveInfo.hide(); // Hides the objective info if clicked again
        }
    });
    
    // When 'Work Experience' is hovered over
    $('#work-heading').hover(function() 
    {
        $(this).css('cursor', 'pointer'); // Change cursor to pointer on hover
    });
    
    $('#work-heading').click(function() 
    {
        let workInfo = $('#work-info');
        if (workInfo.is(':hidden')) 
        {
            workInfo.empty().show(); // Clear previous text and show the paragraph
            typeText(workInfo, workText, 50); // Call the typewriter function with a delay of 50ms
        } 
        else 
        {
            workInfo.hide(); // Hides the work info if clicked again
        }
    });
    
    // When 'Skills' is hovered over
    $('#skills-heading').hover(function() 
    {
        $(this).css('cursor', 'pointer'); // Change cursor to pointer on hover
    });
    
    $('#skills-heading').click(function() 
    {
        let skillsInfo = $('#skills-info');
        if (skillsInfo.is(':hidden')) 
        {
            skillsInfo.empty().show(); // Clear previous text and show the paragraph
            typeText(skillsInfo, skillsText, 50); // Call the typewriter function with a delay of 50ms
        } 
        else 
        {
            skillsInfo.hide(); // Hides the skills info if clicked again
        }
    });
    
    // When 'Awards' is hovered over
    $('#awards-heading').hover(function() 
    {
        $(this).css('cursor', 'pointer'); // Change cursor to pointer on hover
    });

    // When 'Contact Information' is clicked
    $('#awards-heading').click(function() 
    {
        let awardsInfo = $('#awards-info');
        if (awardsInfo.is(':hidden')) 
        {
            awardsInfo.empty().show(); // Clear previous text and show the paragraph
            typeText(awardsInfo, awardsText, 50); // Call the typewriter function with a delay of 50ms
        } 
        else 
        {
            awardsInfo.hide(); // Hides the awards info if clicked again
        }
    });
    
    // When 'Hobbies/Interests' is hovered over
    $('#hobbies-heading').hover(function() 
    {
        $(this).css('cursor', 'pointer'); // Change cursor to pointer on hover
    });

    // When 'Contact Information' is clicked
    $('#hobbies-heading').click(function() 
    {
        let hobbiesInfo = $('#hobbies-info');
        if (hobbiesInfo.is(':hidden')) 
        {
            hobbiesInfo.empty().show(); // Clear previous text and show the paragraph
            typeText(hobbiesInfo, hobbiesText, 50); // Call the typewriter function with a delay of 50ms
        } 
        else 
        {
            hobbiesInfo.hide(); // Hides the hobbies info if clicked again
        }
    });
    
    // When 'Hobbies/Interests' is hovered over
    $('#activities-heading').hover(function() 
    {
        $(this).css('cursor', 'pointer'); // Change cursor to pointer on hover
    });

    // When 'Contact Information' is clicked
    $('#activities-heading').click(function() 
    {
        let activitiesInfo = $('#activities-info');
        if (activitiesInfo.is(':hidden')) 
        {
            activitiesInfo.empty().show(); // Clear previous text and show the paragraph
            typeText(activitiesInfo, activitiesText, 50); // Call the typewriter function with a delay of 50ms
        } 
        else 
        {
            activitiesInfo.hide(); // Hides the hobbies info if clicked again
        }
    });
    
});
