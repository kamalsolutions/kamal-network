<template>
    <section class="section__wrapper">
        <h1>Project Questionnaire</h1>
        <p>Please complete this questionnaire at your leisure. It will give me the opportunity to get a better understanding of your project requests, timelines, and the specificity of your goals and intentions to ensure nothing short of a top quality deliverable.</p>
        <form action="">
            <section class="">
                <label for="">For the purposes of identifying your submission, please list your company name, your project title, and/or your name.</label>
                <input type="text" name="" id="">
            </section>
            <section>
                <label for="">Your Email</label>
                <input type="email">
            </section>
            <section>
                <label for="">Your Phone Number</label>
                <input type="text">
            </section>
            <section>
                <label for="">What Services are you looking for</label>
                <input type="checkbox" name="" id="">Web Design
                <input type="checkbox" name="" id="">Web App
                <input type="checkbox">Content Management System(CMS)
                <section>
                    <label for="">Other</label>
                    <input type="text" name="" id="">
                </section>
            </section>
            <section>
                <label for="">What's Your Budget</label>
                <input type="text" name="" id="">
            </section>
            <section>
                <label for="">What is the timeline for your project?
                </label>
                <input type="radio" name="" id="">1 week
                <input type="radio" name="" id="">2 weeks
                <input type="radio" name="" id="">3 weeks
                <input type="radio" name="" id="">4 weeks
                <section>
                    <label for="">Other</label>
                    <input type="text" name="" id="">
                </section>
            </section>
            <section>
                <label for="">Who is your intended audience? Please describe in a few words who you hope to reach and what message you hope to specifically communicate to them. </label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </section>
            <section>
                <label for="">What is your personal or corporate brand? Please communicate your vision, mission, desired tone/mood in regards to verbiage/intent, brand, and the overall image you would like to communicate through this project. </label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </section>
            <section>
                <label for="">What are your intended goals from this project deliverable (ex. gain more visitors to my site, have a beautiful site, produce copy that will sell a product, encourage site visitors to donate to my foundation, etc.)? </label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </section>
            <section>
                <label for="">Please list out any additional concerns, requirements, or comments you would like me to be aware of that were not requested in the questions above. </label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </section>
        </form>
    </section>
</template>
<script>
export default {
    name: 'Quote',
};
</script>