<style scoped lang="less">
</style>

<template>
    <div>
        <h1 class="page-header">Социално осигуряване</h1>
        <p>
            Необходим е <abbr title="Персонален идентификационен код" class="initialism">ПИК</abbr> от
            <abbr title="Национален осигурителен институт" class="initialism">НОИ</abbr>.
            <a href="http://www.nssi.bg/bg/eservicesbg/reports/42-pik" target="_blank">Повече за ПИК</a>
        </p>
        <div class="row">
            <div class="col-xs-12">
                <form class="form-inline">
                    <div class="radio">
                        <label>
                            <input type="radio" name="type" id="typeEgn" value="egn" v-model="individual.tinType">
                            ЕГН
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="type" id="typePin" value="pin" v-model="individual.tinType">
                            ЛНЧ
                        </label>
                    </div>
                    <div class="form-group" v-if="individual.tinType === 'egn'">
                        <input type="text" class="form-control" id="egn" placeholder="ГГММДДОООК" min="10" max="10"
                               v-model="individual.tin">
                    </div>
                    <div class="form-group" v-if="individual.tinType === 'pin'">
                        <input type="text" class="form-control" id="pin" placeholder="9999999999" min="10" max="10"
                               v-model="individual.tin">
                    </div>
                    <div class="form-group">
                        <label for="nsiPic">ПИН от НОИ</label>
                        <input type="text" class="form-control" id="nsiPic" placeholder="#########"
                               v-model="individual.nsiPic">
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-6 col-lg-4">
                <h2>Справка за статус</h2>
                <p>Показва информация за наличие/липса на осигуровки</p>
                <form target="_blank"
                      action="https://applications2.nssi.bg/reportsocialgridsite/ReportSocial.asp"
                      method="post" v-if="individual.tinType && individual.tin && individual.nsiPic">
                    <input type="hidden" name="ButtonText" value="1">
                    <input type="hidden" name="typeEGN_pt" :value="individual.tinType === 'egn' ? 0 : 2">
                    <input type="hidden" name="egn" :value="individual.tin">
                    <input type="hidden" name="cboFlagEGN" value="0">
                    <input type="hidden" name="txtPIK" :value="individual.nsiPic">
                    <input type="hidden" name="txtHid"
                           :value="'1' + individual.tin + (individual.tinType === 'egn' ? 0 : 2)">
                    <p>
                        <button type="submit" class="btn btn-default">Отвори</button>
                    </p>
                </form>
                <p v-else>
                    <a class="btn btn-default"
                       href="https://applications2.nssi.bg/reportsocialgridsite/ReportSocial.asp" target="_blank"
                       role="button">Отвори</a>
                </p>
            </div>
            <div class="col-xs-6 col-lg-4">
                <h2>Детайлна справка</h2>
                <p>Предоставя информация по месеци за видове осигуровки и доходи</p>
                <p>
                    <a class="btn btn-default" href="https://socialsecurity.nssi.bg/" target="_blank" role="button">Отвори</a>
                </p>
            </div>
            <div class="col-xs-6 col-lg-4">
                <h2>Справка за декларации</h2>
                <p>Показва детайлна информация за подадените декларации</p>
                <p>
                    <a class="btn btn-default"
                       href="http://appreports.nssi.bg/reportegnall/" target="_blank"
                       role="button">Отвори</a>
                </p>
                <p class="text-danger">Връзката не е защитена - вашето ЕГН/ЛНЧ и ПИК код могат да бъдат видяни от
                    нежелани страни!</p>
            </div>
            <div class="col-xs-6 col-lg-4">
                <h2>Други услуги</h2>
                <p>Списък с електронни услуги предоставяни от НОИ</p>
                <p>
                    <a class="btn btn-default"
                       href="http://www.nssi.bg/eservicesbg/reports/reportsegn" target="_blank"
                       role="button">Отвори</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        name: 'fragment-nsi-services',
        data: function () {
            return {
                individual: require('../../backend'),
            }
        },
    }
</script>