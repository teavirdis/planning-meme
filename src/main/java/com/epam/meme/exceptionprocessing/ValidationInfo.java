package com.epam.meme.exceptionprocessing;

public class ValidationInfo {

    private String[] messages;
    private int status;

    public ValidationInfo() { }

    public ValidationInfo(int status) {
        this.status = status;
    }

    public ValidationInfo(String message) {
        this.messages = new String[] { message };
    }

    public ValidationInfo(String message, int status) {
        this.messages = new String[] { message };
        this.status = status;
    }

    public ValidationInfo(Throwable throwable) {
        this.messages = new String[] { throwable.getMessage() };
    }

    public ValidationInfo(Throwable throwable, int status) {
        this.messages = new String[] { throwable.getMessage() };
        this.status = status;
    }

    public void setMessage(String message) {
        this.messages = new String[] { message };
    }

    public void setMessages(String[] messages) {
        this.messages = messages.clone();
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String[] getMessages() {
        return messages;
    }

    public int getStatus() {
        return status;
    }
}
