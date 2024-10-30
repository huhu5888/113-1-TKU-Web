import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <header className="profile-header">
        <h1>Yun-Yan Hu</h1>
        <h2>胡允巖</h2>
        <h3>淡江大學資訊管理學系四年級</h3>
        <p>這是課程作業!!</p>
      </header>

      <div className="content">
        <div className="left-side">
          <section className="skills-section card">
            <h4>興趣</h4>
            <ul>
              <li>打籃球</li>
              <li>愛讀書</li>
              <li>吃美食</li>
              <li>睡覺</li>
            </ul>
          </section>

          <section className="contact-section card">
            <h4>聯絡方式</h4>
            <ul>
              <li><strong>Line ID:</strong> null</li>
              <li><strong>Email:</strong> null</li>
            </ul>
          </section>

          <section className="experience-section card">
            <h4>經歷</h4>
            <ul>
              <li><em>2022-2023</em>&nbsp;<strong>大學一年級</strong>
                <ul>
                  <li>系籃</li>
                  <li>系羽</li>
                  <li>系排</li>
                </ul>
              </li>
              <li><em>2023-2024</em>&nbsp;<strong>大學二年級</strong>
                <ul>
                  <li>資管系學會公關</li>
                </ul>
              </li>
            </ul>
          </section>
        </div>

        <div className="right-side">
          <section className="certification-section card">
            <h4>證照</h4>
            <div className="cert-item">
              <h5>eJPT - Junior Penetration Tester</h5>
              <img src="https://camo.githubusercontent.com/280fb77bffe0010e47564bc1a8a319ec47b791f73ff66b75c2ee96871065c8e9/68747470733a2f2f74656d706c617465732e696d616765732e63726564656e7469616c2e6e65742f31363934373139323930313839383731393639393135313534303836323833342e706e67"
                alt="eJPT - Junior Penetration Tester" />
            </div>
          </section>

          <section className="cert-info-section card">
            <h4>證照資訊</h4>
            <table className="certification-table">
              <thead>
                <tr>
                  <th>證照名稱</th>
                  <th>證照資訊</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>App Development with Swift Certified User</td>
                  <td><a
                    href="https://www.gept.org.tw/">檢視證照資訊</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>

    </>
  )
}

export default App