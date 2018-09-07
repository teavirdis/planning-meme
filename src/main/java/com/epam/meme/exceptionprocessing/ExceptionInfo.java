package com.epam.meme.exceptionprocessing;

public class ExceptionInfo {

    private String[] messages;
    private int status;

    public ExceptionInfo() { }

    public ExceptionInfo(int status) {
        this.status = status;
    }

    public ExceptionInfo(String message) {
        this.messages = new String[] { message };
    }

    public ExceptionInfo(String message, int status) {
        this.messages = new String[] { message };
        this.status = status;
    }

    public ExceptionInfo(Throwable throwable) {
        this.messages = new String[] { throwable.getMessage() };
    }

    public ExceptionInfo(Throwable throwable, int status) {
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
