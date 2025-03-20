
function separarClavesYValores(obj) {
    let claves = Object.keys(obj); // Obtener las claves del objeto
    let valores = Object.values(obj); // Obtener los valores del objeto
    return [claves, valores];
}

function plot_bar_experience(
    chart_id,
    skill_experience_dict,
    lang='ES'
){
    /*
    chart_id: the id of the chart where you want to plot the bar chart
    skill_experience_dict: A dict of the shape
        {
            skill: level
        }

        where skill is a string with the name of the skill you want to plot
        and level represent the amount of experience in that skill,
        it must be a number between 0 and 1, 
        0.3 will be labeled as low
        0.6 will be labeled as quite
        0.9 will be labeled as a lot
    */

    const ctx = document.getElementById(chart_id);
    const [skills,levels] = separarClavesYValores(skill_experience_dict);

    let title_;
    let low_level_label;
    let mid_level_label;
    let high_level_label;
    if (lang==='ES'){
        title_='Experiencia';
        low_level_label = 'Poca';
        mid_level_label = 'Bastante';
        high_level_label = 'Mucha';
    }
    else if (lang==='EN'){
        title_='Expereince';
        low_level_label = 'Little';
        mid_level_label = 'Significant';
        high_level_label = 'A lot';
    }
    
    const data = {
        labels: skills,
        datasets: [{
            label: title_,
            data: levels,
        }]
    }



    const config = {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'y',
            plugins: {
                title: {
                    text: title_
                },
                annotation: {
                    annotations: {
                        linea_poca: {
                            type: 'line',
                            xMin: 0.2,
                            xMax: 0.2,
                            borderDash: [5,3],
                            label: {
                                content: low_level_label,
                                enabled: true,
                                display: true,
                                position: 'center',
                                font: {
                                    size: 12,
                                    color: 'rgba(0,0,0,0.7)'
                                },
                                xAdjust: 10,
                                yAdJust: 0
                            }
                        },
                        linea_bastante: {
                            type: 'line',
                            xMin: 0.5,
                            xMax: 0.5,
                            borderDash: [5,3],
                            label: {
                                content: mid_level_label,
                                enabled: true,
                                display: true,
                                position: 'center',
                                font: {
                                    size: 12,
                                    color: 'rgba(0,0,0,0.7)'
                                },
                                xAdjust: 10,
                                yAdJust: 0
                            }
                        },
                        linea_mucha: {
                            type: 'line',
                            xMin: 0.8,
                            xMax: 0.8,
                            borderDash: [5,3],
                            label: {
                                content: high_level_label,
                                enabled: true,
                                display: true,
                                position: 'center',
                                font: {
                                    size: 12,
                                    color: 'rgba(0,0,0,0.7)'
                                },
                                xAdjust: 10,
                                yAdJust: 0
                            }
                        }
                    }
                },
            },
            scales: {
                x: {
                    min: 0,
                    max: 1,
                    step: 0.1,
                    ticks: {
                        autoSkip: false,
                        maxRotation: 0,
                        minRotation: 0,
                    }
                }
            }
        }
    }

    new Chart(ctx,config);
}


function math_levels(lang='ES'){
    let levels;

    if (lang==='ES'){
        levels = {
            'Definición del problema': 1,
            'Resolución del problema': 0.9,
        }
    }
    else if (lang==='EN'){
        levels = {
            'Problem\'s definition': 1,
            'Problem\'s resolution': 0.9,
        }
    }

    return levels;
}


function programming_levels(lang='ES'){
    let levels;

    if (lang==='ES'){
        levels = {
            'Programación': 0.9,
            'Documentación': 0.6,
            'Bases de datos': 0.6,
            'Despliegue': 0.2,
            'Arquitectura': 0.3,
        }
    }
    else if (lang==='EN'){
        levels = {
            'Programming': 0.9,
            'Documentation': 0.6,
            'Databases': 0.6,
            'Deployment': 0.2,
            'Architecture': 0.3,
        }
    }

    return levels;
}

function IA_levels(lang='ES'){
    let levels;

    if (lang==='ES'){
        levels = {
            'Procesamiento de tablas': 0.8,
            'Procesamiento de imágenes': 0.7,
            'Procesamiento del lenguaje natural': 0.4,
            'Aplicación de modelos clásicos': 0.6,
            'Aplicación de deep learning': 0.4,
            'LLM/GenAI': 0.1
        }
    }
    else if (lang==='EN'){
        levels = {
            'Tables processing': 0.8,
            'Image processing': 0.7,
            'Natural language processing': 0.4,
            'Classic algorithm application': 0.6,
            'Deep learning application': 0.4,
            'LLM/GenAI': 0.1
        }
    }

    return levels;
}

function stats_levels(lang='ES'){
    let levels;

    if (lang==='ES'){
        levels = {
            'Descriptiva': 0.8,
            'Inferencial': 0.4,
            'Técnicas de muestreo': 0.2
        }
    }
    else if (lang==='EN'){
        levels = {
            'Descriptive': 0.8,
            'Inferential': 0.4,
            'Sampling': 0.2
        }
    }

    return levels;
}

plot_bar_experience('chart-math',math_levels());
plot_bar_experience('chart-programming',programming_levels());
plot_bar_experience('chart-IA',IA_levels());
plot_bar_experience('chart-stats',stats_levels());
