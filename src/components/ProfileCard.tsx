import styled from 'styled-components';

const ProfileCard = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
        <div className="card" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    height: 100%;
  }

  .container .card {
    position: absolute;
    height: 196px;
    width: 132px;
    background-color: #ebebeb;
    background-size: cover;
    background-position: center;
    border: 5px solid #ffffff;
    border-bottom: 40px solid #ffffff;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    border-radius: 8%;
    box-shadow: #c7c7c7 -2px 2px 4px;
    transform-origin: bottom left;
    scale: 1;
    transition-duration: 200ms;
  }

  .container .card:hover {
    scale: 1.1;
  }

  .container .card:nth-child(1) {
    background-image: url('/assets/logo.jpg');
  }
  .container .card:nth-child(2) {
    background-image: url('/assets/image2.jpg');
  }
  .container .card:nth-child(3) {
    background-image: url('/assets/image3.jpg');
  }
  .container .card:nth-child(4) {
    background-image: url('/assets/image4.jpg');
  }
  .container .card:nth-child(5) {
    background-image: url('/assets/image5.jpg');
  }
  .container .card:nth-child(6) {
    background-image: url('/assets/image6.jpg');
  }
  .container .card:nth-child(7) {
    background-image: url('/assets/profile.png');
  }

  .container:hover .card:nth-child(1) {
    transform: rotate(-54deg) translate(0px, -8px);
  }
  .container:hover .card:nth-child(2) {
    transform: rotate(-36deg) translate(0px, -8px);
  }
  .container:hover .card:nth-child(3) {
    transform: rotate(-18deg) translate(0px, -8px);
  }
  .container:hover .card:nth-child(4) {
    transform: rotate(0deg) translate(0px, -8px);
  }
  .container:hover .card:nth-child(5) {
    transform: rotate(18deg) translate(0px, -8px);
  }
  .container:hover .card:nth-child(6) {
    transform: rotate(36deg) translate(0px, -8px);
  }
  .container:hover .card:nth-child(7) {
    transform: rotate(54deg) translate(0px, -8px);
  }
`;

export default ProfileCard;
