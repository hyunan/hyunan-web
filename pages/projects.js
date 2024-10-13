import { Box, Text, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/ani-page'
import ProjectIcon from '../components/project-icon'

const Projects = () => {
  return (
    <Layout>
      <Box pt={16} h={{ base: '230vh', md: '100vh' }}>
        <Text fontWeight='bold' fontSize='3xl' pb={4}>
          Some projects
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <ProjectIcon
            imgSrc='/images/website.png'
            projectTitle='This website'
            stackInfo='React.js, Next.js, Chakra UI, Vanta.js'
            source='https://github.com/hyun-an/hyunan'
            href='https://github.com/hyun-an/hyunan'
            show={true}
          />
          <ProjectIcon
            imgSrc='/images/todoapp.png'
            projectTitle='Simple To Do App'
            stackInfo='Typescript, React Native, Nativebase'
            source='https://github.com/hyun-an/fancy-todolist'
            href='https://github.com/hyun-an/fancy-todolist'
            show={true}
          />
        </SimpleGrid>
      </Box>
    </Layout>
  )
}

export default Projects
