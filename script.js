

<script>
    function sendWhatsApp(e){
        e.preventDefault();
        let name=document.getELementById('name').value;
        let date=document.getELementById('date').value;
        let time=document.getELementById('time').value;
        let msg=document.getELementById('message').value;

        let url='https://wa.me/18765139042?text=Booking%20Request:%OAName:%20${name}%OADate:%20${date}%OATime:%20${time}%OAService:%20${msg}';

        window.open(url,_'blank');
    }
</script>
