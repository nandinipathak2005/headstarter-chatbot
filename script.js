<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatbot Interface</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to the external CSS file -->
   
</head>
<body bgcolor="#DEEFF5">
    <!-- Main chat container -->
    <div class="chat-container">
        <!-- Header with the chatbot title -->
        <div class="chat-header">
            <h2>Customer Support Chatbot</h2>
        </div>
        
        <!-- Body where chat messages will appear -->
        <div class="chat-body">
            <!-- Sample user message -->
            
            <!-- Sample bot response -->
            
            <div class="message bot-message">
                Hi! How can I help you today?
            </div>
        </div>
        
        <!-- Footer with input field and send button -->
        <div class="chat-footer">
            <input type="text" id="user-input" placeholder="Type your message here..."> <!-- Input box for user messages -->
            <button id="send-button">Send</button> <!-- Button to send the message -->
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
