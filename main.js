//////// PROFILE - SIZE - SPACE PER EMPLOYEE ////////
const spaceEconomy = document.getElementById('economy');
const selectSpacingInfo = document.getElementById("spacingInfo");

spaceEconomy.addEventListener('click', function()) {
    spaceEconomy.style.backgroundColor = #ff5050;
}


//////// PROFILE - LOCATION - CITY - MAP ////////
const selectCity = document.getElementById("city");
const mapIframe = document.querySelector("#map iframe");

selectCity.addEventListener("change", function() {
  switch(selectCity.value) {
    case "mexicoCity":
        mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120432.08228115416!2d-99.21400327046015!3d19.390679705324604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sMexico%20City%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sco!4v1680743352761!5m2!1sen!2sco";
        break;
    case "tijuana":
        mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107693.63802264926!2d-117.02546583039965!3d32.48803638806659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9390226587bd3%3A0x14724bafa4e62456!2sTijuana%2C%20Baja%20California%2C%20Mexico!5e0!3m2!1sen!2sco!4v1680745034027!5m2!1sen!2sco";
        break;
    case "leon":
        mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59548.253580976816!2d-101.70120424291062!3d21.12189933923445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbeffd6e6e721%3A0x606d95ec61a54327!2sLe%C3%B3n%2C%20Guanajuato%2C%20Mexico!5e0!3m2!1sen!2sco!4v1680745697766!5m2!1sen!2sco";
        break;
    case "puebla":
        mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120689.24164550651!2d-98.26317689612912!3d19.040033933546997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0bd5ebc7a3b%3A0x48a6461de494ad95!2sPuebla%2C%20Mexico!5e0!3m2!1sen!2sco!4v1680745825893!5m2!1sen!2sco";
        break;
    case "ecatepec":
        mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120297.44966788411!2d-99.10791658858086!3d19.571845421542864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f21c72f777a1%3A0x4cd4540a42b26680!2sAgricultura%204-A%2C%20Ecatepec%20de%20Morelos%2C%20M%C3%A9x.%2C%20Mexico!5e0!3m2!1sen!2sco!4v1680745881595!5m2!1sen!2sco";
        break;
    default:
      mapIframe.src = "";
  }
});

//////// PROFILE - LOCATION - CITY - NEIGHBORHOODS ////////
const citySelect = document.querySelector('#city');
const neighborhoods = document.querySelector('#neighborhoods');
const neighborhoodsMexicoCity = document.querySelector('#neighborhoods-mexicoCity');
const neighborhoodsTijuana = document.querySelector('#neighborhoods-tijuana');

// hide all neighborhoods divs by default
neighborhoods.style.display = 'none';
neighborhoodsMexicoCity.style.display = 'none';
neighborhoodsTijuana.style.display = 'none';

// add event listener to city select
citySelect.addEventListener('change', function() {
  if (citySelect.value === 'mexicoCity') {
    neighborhoods.style.display = 'block';
    neighborhoodsMexicoCity.style.display = 'block';
    neighborhoodsTijuana.style.display = 'none';
  } else if (citySelect.value === 'tijuana') {
    neighborhoods.style.display = 'block';
    neighborhoodsMexicoCity.style.display = 'none';
    neighborhoodsTijuana.style.display = 'block';
  } else {
    neighborhoods.style.display = 'none';
  }
});

//////// PROFILE - LOCATION - CITY - NEIGHBORHOODS - MAP ////////
//CODE DOES NOT WORK //
const selectNeighborhood = document.getElementById("neighborhoods-mexicoCity");
const mapIframeNeighborhood = document.querySelector("#map iframe");

selectNeighborhood.addEventListener("change", function() {
  switch(selectNeighborhood.id) {
    case "condesa":
        mapIframeNeighborhood.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120432.08228115416!2d-99.21400327046015!3d19.390679705324604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sMexico%20City%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sco!4v1680743352761!5m2!1sen!2sco";
        break;
    case "juarez":
        mapIframeNeighborhood.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107693.63802264926!2d-117.02546583039965!3d32.48803638806659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9390226587bd3%3A0x14724bafa4e62456!2sTijuana%2C%20Baja%20California%2C%20Mexico!5e0!3m2!1sen!2sco!4v1680745034027!5m2!1sen!2sco";
        break;
    case "polanco":
        mapIframeNeighborhood.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59548.253580976816!2d-101.70120424291062!3d21.12189933923445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbeffd6e6e721%3A0x606d95ec61a54327!2sLe%C3%B3n%2C%20Guanajuato%2C%20Mexico!5e0!3m2!1sen!2sco!4v1680745697766!5m2!1sen!2sco";
        break;
    case "roma":
        mapIframeNeighborhood.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120689.24164550651!2d-98.26317689612912!3d19.040033933546997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0bd5ebc7a3b%3A0x48a6461de494ad95!2sPuebla%2C%20Mexico!5e0!3m2!1sen!2sco!4v1680745825893!5m2!1sen!2sco";
        break;
    default:
        mapIframeNeighborhood.src = "";
  }
});