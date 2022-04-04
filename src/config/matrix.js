export const Matrix = {
    "tactic" : {
        "Persistence" : [
            {
                "Technique" : "Registry Run Keys / Startup",
                "No" : "T1547.001",
                "Summary" : "공격자는 프로그램을 시작 폴더에 추가하거나 레지스트리 실행 키로 참조하여 지속성을 유지할 수 있습니다.",
                "Link" : ""
            },
            {
                "Technique" : "Time Providers",
                "No" : "T1547.003",
                "Summary" : "공격자는 시스템이 부팅될 때 DLL을 실행하기 위해 Time Provider를 악용할 수 있습니다.",
                "Link" : ""
            },
            {
                "Technique" : "Winlogon Helper DLL",
                "No" : "T1547.004",
                "Summary" : "공격자는 사용자가 로그인할 때 DLL 및 실행 파일을 실행하기 위해 Winlogon의 기능을 악용할 수 있습니다.",
                "Link" : ""
            },
            {
                "Technique" : "Scheduled Task/Job",
                "No" : "T1053",
                "Summary" : "공격자는 작업 예약 기능(Windows Task Scheduler, Linux Crontab)을 이용하여 악성코드를 실행하고, 지속성을 유지할 수 있습니다.",
                "Link" : ""
            },
            {
                "Technique" : "Office Application Startup",
                "No" : "T1137",
                "Summary" : "공격자는 MS Office 제품의 다양한 기능을 활용하여 악성행위를 수행할 수 있습니다.",
                "Link" : ""
            },
            {
                "Technique" : "Browser Extensions",
                "No" : "T1053",
                "Summary" : "공격자는 Chrome, Firefox 등의 확장 프로그램으로 침투하여 피해 시스템에 지속적으로 접근할 수 있습니다.",
                "Link" : ""
            },
            
        ],
        "Lateral Movement" : [
            {
                "Technique" : "Remote Services",
                "No" : "T1021",
                "Summary" : "공격자는 사전에 탈취된 계정을 기반으로 원격 연결 서비스(SSH, VNC, WinRM)등 으로 피해 시스템에 침투할 수 있습니다.",
                "Link" : ""
            },
            {
                "Technique" : "Taint Shared Content",
                "No" : "T1080",
                "Summary" : "공격자는 네트워크 드라이브, 내부 코드 저장소 등을 통해 원격 시스템에 페이로드를 생성할 수 있습니다.",
                "Link" : ""
            }
        ],
        "Defense Evasion" : [
            {
                "Technique" : "Hide Artifacts",
                "No" : "T1564",
                "Summary" : "공격자는 탐지를 피하기 위해 행동과 관련된 아티팩트를 숨기려고 할 수 있습니다.",
                "Link" : ""
            },
            {
                "Technique" : "Modify Registry",
                "No" : "T1112",
                "Summary" : "공격자는 Windows 레지스트리와 상호 작용하여 레지스트리 키 내의 구성 정보를 숨기고, 정리의 일부로 정보를 제거하거나, 지속성 및 실행을 지원하는 기타 기술의 일부로 정보를 제거할 수 있습니다.",
                "Link" : ""
            }
        ],
        "Command and Control" : [
            {
                "Technique" : "Dynamic Resolution",
                "No" : "T1568",
                "Summary" : "공격자는 일반적인 탐지 및 치료를 피하기 위해 명령 및 제어 인프라에 대한 연결을 동적으로 설정할 수 있습니다.",
                "Link" : ""
            },
        ],
    }
}