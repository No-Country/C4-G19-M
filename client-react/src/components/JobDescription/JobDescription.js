import React from 'react'
import { AccessTimeRounded, CakeOutlined, CheckroomOutlined, DinnerDiningOutlined,  LaptopMacOutlined, LocalHospitalOutlined,  TagFacesOutlined,  WatchLater } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import { Col, Row } from 'reactstrap';
import classes from './JobDescription.module.scss'

const JobDescription = () => {


  return (
  <>
   <div className={classes.wrapper}>
                    <h1 className={classes.title}>Job Description Page</h1>
                    <ul>
                        <li>Argentina</li>
                        <li>|</li>
                        <li>Junior</li>
                        <li>|</li>
                        <li>Full time</li>
                        <li>|</li>
                        <li>Programación</li>
                    </ul>

                    <ul className={classes.items}>
                        <li>
                            <PersonIcon className={classes.icon} />
                            <span>22 postulaciones</span>
                        </li>
                        <li>
                            <WatchLater className={classes.icon} />
                            <span>Responde entre 2 y 10 días</span>
                        </li>
                        <li>
                            <TagFacesOutlined  className={classes.icon}/>
                            <span >Revisado por última vez ayer</span>
                        </li>
                    </ul>
                    <div>
                        <button className='btn btn-primary'>Postulate</button>
                    </div>
                </div>
                <div className={classes.wrapperDesc}>
                    <p className='text'>
                        Llevamos casi 20 años entregando soluciones de punta basadas en la interpretación de Big Data generada por cientos de millones de personas alrededor del mundo, con el objetivo final de mejorar sus vidas.

                        Hemos mejorado el engagement y lealtad de los clientes finales, al mismo tiempo aumentando los ingresos de grandes empresas alrededor del mundo, en el mercado de las telecomunicaciones, servicios financieros y comercio minorista.

                        Nuestras soluciones se basan en servicios gestionados con tecnología de propiedad intelectual propia y patentada. Somos líderes en el mercado con más de 50 instalaciones en producción hoy día en clientes ubicados en 15 países; nos respalda un equipo de profesionales en Latino América, Asia y Europa.
                    </p>
                    <h3 className='title m3 p-3'>Job Functions</h3>
                    <p className='text'>
                        Nos encontramos en búsqueda de una persona para que se integre a nuestro equipo en el cargo de Desarrollador, el perfil se orienta a un Ingeniero Informático o carrera afín con al menos 1 año de experiencia por lo que se espera que aprenda y crezca dentro de la empresa.

                        Funciones:

                        · Implementar soluciones basadas en tecnologías de la información.

                        · Colaborar con el área de proyectos con el desarrollo y análisis de requerimientos, orientado a la mejora continua

                        · Desarrollo y programación de software y sus pruebas respectivas

                        · Mantener actualizado el sistema de control de versiones cuando se de por completo el desarrollo

                        Todas nuestras ofertas laborales son inclusivas bajo el marco de la ley 21.015, que incentiva la inclusión de Personas con Discapacidad al mundo laboral. En caso de que requieras algún ajuste para participar del proceso de reclutamiento y selección, avísanos para facilitar tu participación en igualdad de condiciones. (Ley 20.422).
                    </p>
                    <h3 className='title m-3 p-3'>Qualifications and requirements</h3>
                    <p className='text'>
                        Buscamos profesionales juniors que posean los siguientes requisitos:
                        - Titulado de Ingeniería en Computación o Informática
                        - Contar con al menos 1 año de experiencia
                        - Dominio de los lenguajes: .Net y Python
                    </p>
                    <h3 className='title m-3 p-3'>Desirable skills</h3>
                    <p className='text'>
                        - Deseable manejo uno o más de los siguientes: BBDD, PostgreSql,
                        - Inglés deseable
                        - Deseable dominio de Go, Oracle y/o SQL Server
                        - Deseable conocimiento en Implementación en Soluciones cloud GCP, Azure, AWS

                        - Deseable conocimiento de BBDD NoSQL

                        -Deseable experiencia en industria Telecomunicaciones, Bancaria / Financiera, Retail</p>
                    <div className='conditions '>
                        <h3 className='title '>Conditions</h3>
                        <Row>
                            <Col className='col-left'>
                                <ul>
                                    <li>
                                        <AccessTimeRounded className='icon'/>
                                        <span>Flexible schedule</span>
                                    </li>
                                    <li>
                                        <LaptopMacOutlined className='icon'/>
                                        <span>Paid internet service</span>
                                    </li>
                                    <li>
                                        <CakeOutlined className='icon'/>
                                        <span>Free day on birthday</span>
                                    </li>
                                </ul>
                            </Col>
                            <Col className='col-right'>
                                <ul>
                                    <li>
                                        <LocalHospitalOutlined className='icon'/>
                                        <span>Healthcare</span>
                                    </li>
                                    <li>
                                        <CheckroomOutlined className='icon'/>
                                        <span>Informal wear</span>
                                    </li>
                                    <li>
                                        <DinnerDiningOutlined className='icon'/>
                                        <span>Free meals</span>
                                    </li>
                                </ul>

                            </Col>
                        </Row>
                    </div>
                </div>
                </>
  )
}

export default JobDescription