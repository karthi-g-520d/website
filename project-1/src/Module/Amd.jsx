import styles from "./Amd.module.css" 

function Amd() {
    return(
        <div className={styles.amd}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/AMD_Logo.png" alt="profile pic" />
            <a href="https://www.amd.com/en.html"> <button>Official page</button> </a>
            <p>Advanced Micro Devices, Inc. (AMD) is an American multinational
                 corporation and technology company headquartered in Santa Clara,
                 California and maintains significant operations in
                 Austin, Texas. AMD is a hardware and fabless company
                  that designs and develops central processing units (CPUs),
                   graphics processing units (GPUs), field-programmable 
                gate arrays (FPGAs), system-on-chip (SoC), and high-performance computer solutions.</p>
        </div>
    );
}
export default Amd