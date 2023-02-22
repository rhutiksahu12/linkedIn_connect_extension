

const btn = document.getElementById('connect_btn');

btn.addEventListener('click', async () => {
    console.log("clicked")

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    console.log(tab)


    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: connectAll
    })

})


const connectAll = () => {
    const buttons = document.querySelectorAll(".artdeco-button--secondary")
    const buttonsArr = Array.from(buttons)
    buttonsArr.forEach(Element => {
        
// Check if the buttons are connect button or not
            if (Element.innerHTML.includes('Connect')) {
               Element.click()
               const sendBtn = document.querySelectorAll('[aria-label="Send now"]')
               console.log(sendBtn)
            }
        


    })
//     console.log(buttonsArr[3])
//     buttonsArr[3].click()
}


