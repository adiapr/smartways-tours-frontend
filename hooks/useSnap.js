const { useEffect, useState } = require("react")

const useSnap = () => {

    const [snap, setSnap] = useState(null);

    useEffect(() => {
        const midtransClientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY;
        const script = document.createElement('script');
        script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
        script.setAttribute('data-client-key', midtransClientKey);
        script.onload = () => {
            setSnap(window.snap);
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);    
        };
    }, []);

    const snapEmbed = (snap_token, embedId, action) => {
        if(snap){
            snap.embed(snap_token, {
                embedId,
                onSuccess: function(result){
                    console.log('berhasil ', result); 
                }
            })
        }
    }

    return {snapEmbed}
}

export default useSnap;
