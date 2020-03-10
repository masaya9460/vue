<template>
    <div>
        <h5>Contact</h5>
        <div class="contact-container">
            <div class="form-wrap">
                <h1>メッセージ</h1>
                <form>
                    <div class="form-group">
                        <label for="first-name">Name</label>
                        <input type="text" name="firstName" id="first-name" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="detail" cols="71" rows="5"></textarea>
                    </div>                   
                    <button type="submit" class="btn">送信</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "../styles/contact.css";

</style>