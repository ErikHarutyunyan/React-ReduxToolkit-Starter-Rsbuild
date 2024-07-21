export const IcChSelected = ({ style, className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <rect
        x="1.26315"
        y="8.84229"
        width="21.4737"
        height="13.2632"
        rx="3.15789"
        fill="#FB7B1F"
      />
      <rect
        x="4"
        y="2"
        width="16"
        height="17"
        rx="3.15789"
        fill="#FB7B1F"
        stroke="black"
        strokeWidth="1.89474"
      />
    </svg>
  );
};

export const IcChTaken = ({ style, className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <rect
        x="1.26315"
        y="8.84229"
        width="21.4737"
        height="13.2632"
        rx="3.15789"
        fill="white"
      />
      <rect
        x="4"
        y="2"
        width="16"
        height="17"
        rx="3.15789"
        fill="white"
        stroke="black"
        strokeWidth="1.89474"
      />
    </svg>
  );
};

export const IcChEmpty = ({ style, className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <g opacity="0.3">
        <rect
          x="1.26315"
          y="8.84229"
          width="21.4737"
          height="13.2632"
          rx="3.15789"
          fill="white"
        />
        <rect
          x="4"
          y="2"
          width="16"
          height="17"
          rx="3.15789"
          fill="white"
          stroke="black"
          strokeWidth="1.89474"
        />
      </g>
    </svg>
  );
};

export const IcEdit = ({ style, className }) => {
  return (
    <svg
      fill="rgb(255, 194, 38)"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 494.936 494.936"
      xmlSpace="preserve"
      stroke="rgb(255, 194, 38)"
      style={style}
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <g>
          {' '}
          <g>
            {' '}
            <path d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157 c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21 s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741 c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"></path>{' '}
            <path d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069 c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963 c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692 C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107 l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005 c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"></path>{' '}
          </g>{' '}
        </g>{' '}
      </g>
    </svg>
  );
};

export const IcCheck = ({ style, className }) => {
  return (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#69be13"
      style={style}
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <path
          d="M4 12.6111L8.92308 17.5L20 6.5"
          stroke="#69be13"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{' '}
      </g>
    </svg>
  );
};

export function IcTrash(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9.17 4a3.001 3.001 0 0 1 5.66 0m5.67 2h-17m14.874 9.4c-.177 2.654-.266 3.981-1.131 4.79c-.865.81-2.195.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81c-.865-.809-.953-2.136-1.13-4.79l-.46-6.9m13.666 0l-.2 3M9.5 11l.5 5m4.5-5l-.5 5"
      ></path>
    </svg>
  );
}
export default { IcChSelected, IcChTaken, IcChEmpty, IcEdit, IcCheck, IcTrash };
