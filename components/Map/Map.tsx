import styles from './Map.module.scss';

export const Map: React.FC<{}> = () => {
  return(
    <div className={styles.mapContainer}>
      <iframe 
      title="Map to Highworth Physiotherapy Clinic"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d154.78749751674846!2d-1.7104342701122048!3d51.630536813454874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487148625caf79a5%3A0xfd8b60c3a023fce!2sHighworth%20Physiotherapy%20Clinic!5e0!3m2!1sen!2suk!4v1679055310737!5m2!1sen!2suk" 
        className={styles.mapFrame}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Map;
