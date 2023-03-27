const baseUrl = "https://restogjavadr20230327122701.azurewebsites.net/api/Records"

Vue.createApp({
    data(){
        return{
            Records: []
        }
    },
    methods: {
        getAllRecords(){
            this.helperGetAndShow(baseUrl)
        },
    }



}).mount("#app")