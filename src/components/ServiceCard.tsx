import React from 'react';
import styled from 'styled-components';

interface ServiceCardProps {
  logo: string; // Prop to pass in custom trophy image URL or path
}

const ServiceCard: React.FC<ServiceCardProps> = ({ logo }) => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="image-container">
          <img src={logo} alt="Trophy" className="trophy-image" />
        </div>
        <div className="container__star">
          <div className="star-eight" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  margin-bottom: 5rem; /* Add margin bottom for spacing between cards */

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 5em;
    font-weight: 900;
    color: #e10600;
    position: relative;
    transition: all 1s ease;
    text-align: center;
  }

  .container__star {
    transition: all .7s ease-in-out;
  }

  .image-container {
    position: absolute;
    z-index: 1;
  }

  .trophy-image {
    width: 100px; /* Adjust the size of the trophy */
    height: 100px;
  }

  .star-eight {
    background: #6a6a6a ; /* bg-gray-900 */
    width: 150px;
    height: 150px;
    position: relative;
    text-align: center;
    transition: transform 3s ease-in-out; /* Remove rotation animation here */
  }

  .star-eight::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 150px;
    width: 150px;
    background: #6a6a6a ; /* bg-gray-900 */
    transform: rotate(135deg);
  }

  .container:hover .container__star .star-eight {
    transform: rotate(360deg); /* Rotate only on hover */
  }

  .container:hover .container__star {
    transform: rotateX(70deg) translateY(250px);
    box-shadow: 0px 0px 120px -100px #e4e727;
  }

  .container:hover .image-container {
    animation: grow 1s linear infinite;
  }

  @keyframes grow {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(-5deg);
    }

    75% {
      transform: rotate(5deg);
    }

    100% {
      transform: scale(1) rotate(0deg);
    }
  }
`;

export default ServiceCard;
