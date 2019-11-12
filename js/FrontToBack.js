/**
 *
 * @author Arthur
 */

class Request {

    /**
     * Realiza uma requisição GET, retornando uma Promise com a resposta.
     *
     * @param {string} url - A URL de onde se quer fazer a requisição
     * @param {string} [responseType=json] - O tipo de resposta que se deseja
     * obter. Por padrão, o tipo será JSON
     * @returns {Promise} Uma Promise que retorna a resposta do servidor
     */
    static async get(url, servlet, responseType = 'text') {

        return await new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            let link = "http://localhost:4848/JAVA/" + servlet + "?" + url;
            console.log("link:" + link);
            request.responseType = responseType;
            request.open('GET', link, true);
            request.onreadystatechange = function() {
                if (request.readyState === 4 && request.status === 200)
                    resolve(request.response);
            };
            request.onerror = reject;
            request.send();

        });

    }

    /**
     * Realiza uma requisição POST, retornando uma Promise com a resposta.
     *
     * @param {string} url - A URL de onde se quer fazer a requisição
     * @param {string} params - String contendo os parâmetros a serem
     *  passados na requisição. Exemplo: 'id=3&parametro=valor'
     * @param {string} [responseType=json] - O tipo de resposta que se deseja
     * obter. Por padrão, o tipo será JSON
     * @returns {Promise} Uma Promise que retorna a resposta do servidor
     */
    static async post(url, params = '', responseType = 'text') {

        return await new Promise(function (resolve, reject) {

            let request = new XMLHttpRequest();
            let link = "http://localhost:8080/JAVA/BackToFrontServlet?" + url;
            console.log("link:" + link);
            request.responseType = responseType;
            request.open('POST', link, true);
            request.onreadystatechange = function () {
                if (request.readyState === 4 && request.status === 200)
                    resolve(request.response);
            };
            request.setRequestHeader('Access-Control-Allow-Origin', '*');
            request.onerror = reject;
            request.send(params);

        });

    }

};
