import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Posts } from './components/Posts/Posts';

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80",
      name: "Jane Cooper",
      role: "Dev Front-End"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      name: "Mike Brito",
      role: "Dev Back-End"
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal 👋'},
      {type: 'paragraph', content: 'Estão gostando do vídeo novo?'},
      {type: 'paragraph', content: 'Esse é o link: '},
      {type: 'link', content: 'Como aumentar o portifólio?'},
    ],
    publishedAt: new Date('2022-11-10 20:00:00')
  }
]

export function App() {
  return ( 
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { 
            posts.map((post) => 
              <Posts 
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
                key={post.id}
              />
            )
          }
          
        </main>
      </div>
    </>
  )
}
