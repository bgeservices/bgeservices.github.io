<style scoped lang="less">
</style>

<template>
    <div>
        <h1 class="page-header">Пловдив</h1>
        <div class="row">
            <div class="col-xs-6 col-lg-4">
                <h2>Плащане на местни данъци и ТБО</h2>
                <p>Позволява заплащане чрез дебитна/кредитна карта</p>
                <p class="text-warning">Необходим е <abbr title="Персонален идентификационен номер" class="initialism">ПИН</abbr> код
                    издаден от гишетата на отдел <a href="https://goo.gl/maps/L49Lgc2c8N12" target="_blank">"Местни данъци и такси"</a> към община Пловдив.</p>
                <p>
                    <a class="btn btn-default"
                       href="http://mdt.plovdiv.bg:8081/OnlineReportWSClient/obligations" target="_blank"
                       role="button">Отвори</a>
                </p>
                <p class="text-danger">Връзката не е защитена - вашето ЕГН/ЛНЧ и ПИН код могат да бъдат видяни от
                    нежелани страни!</p>
            </div>
            <div class="col-xs-6 col-lg-4">
                <h2>Справка за задължения</h2>
                <p>Позволява обобщена информация само по ЕГН или подробна чрез УЕП или потребителско име и парола.</p>
                <p>За регистрация се попълва <a href="http://registry.plovdiv.bg/plvduties/register.aspx" target="_blank">формуляр</a>,
                    след което от <a href="https://goo.gl/maps/Skwmkk1LCCq" target="_blank">общината</a> се взима паролата.</p>
                <p>
                    <a class="btn btn-default"
                       href="http://registry.plovdiv.bg/plvduties/" target="_blank"
                       role="button">Отвори</a>
                </p>
                <p class="text-danger">Връзката не е защитена - вашето ЕГН/ЛНЧ, потребителско име и парола могат да бъдат видяни от
                    нежелани страни!</p>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {}
</script>