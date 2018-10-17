import {DEFAULT_COOKIE_REGEX, DEFAULT_COOKIE_VALUE} from "./TextConstant";
import $ from "jquery"

class MemeUtil {
    static identifyCookieByName(name) {
        let matches = document.cookie.match(new RegExp(
            `(?:^|; )${name.replace(DEFAULT_COOKIE_REGEX, '\\$1')}=([^;]*)`
        ));
        return matches ? decodeURIComponent(matches[1]).replace('|', ',') : undefined;
    }

    static deleteCookieByName(name) {
        document.cookie = name + DEFAULT_COOKIE_VALUE;
    }

    static IsoDateString(date) {
        function pad(n) {
            return n < 10 ? "0" + n : n
        }

        return date.getUTCFullYear() + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate()) + "T"
            + pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds())
    }

    static formatTime(seconds) {
        return [
            parseInt(seconds / 60 / 60, 10),
            parseInt(seconds / 60 % 60, 10),
            parseInt(seconds % 60, 10)
        ]
            .join(":")
            .replace(/\b(\d)\b/g, "0$1")
    }

    static findIdByUrl(regex, currentUrl){
        let resultGroupMatch = regex.exec(currentUrl)[1];
        regex.lastIndex = 0;
        return resultGroupMatch;
    }

    static focusBoardNameInput(selector){
            $(selector).focus();
    }

    static closeModal(id){
            $(id).click();
    }

    static connect(memeClient){
        memeClient.onmessage = function (event) {
            var jsonObj = JSON.parse(event.data);
            var message = jsonObj.user + ": " + jsonObj.boardId;
            alert("Voting is started: " + message);
        };
    }

    static disconnect(memeClient) {
        memeClient.close();
    }

    static initializeTeamMember(){
        let host = window.location.host;
        let path = window.location.pathname;
        let webCtx = path.substring(0, path.indexOf('/', 1));
        let endPointURL = "ws://" + window.location.host + webCtx + "/meme/start";
        return new WebSocket(endPointURL);
    }

    static sendMessage(ws, boardId) {
            ws.send(JSON.stringify({
                      "user" : "1", "boardId" : boardId
                       })
            );
    }
}

export default MemeUtil;
